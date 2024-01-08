"use client";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Phaser from "phaser";

export default function Game() {
  // const gameRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef(null);
  let game: Phaser.Game;
  let cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  let player1Score = 0;
  let player2Score = 0;
  let scoreText: Phaser.GameObjects.Text;
  const [socketIo, setSocketIo] = useState<any | null>(null);

  if (!socketIo) {
    const _socketIo = io("http://15.164.165.151");
    setSocketIo(_socketIo);
  }
  useEffect(() => {
    if (game !== undefined) return;
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 1420,
      height: 700,
      parent: "phaser-game",
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
          debug: true,
        },
      },
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    game = new Phaser.Game(config);
    // socket = io();
    let myPaddle: Phaser.Physics.Arcade.Sprite;
    function preload(this: Phaser.Scene) {
      this.load.image("paddle", "/Cat_character.png");
      this.load.image("puck", "/epepdooly.png");
    }

    function create(this: Phaser.Scene) {
      let eventOn = false;

      socketIo.on("opponentScored", (data: any) => {
        const { player1Score: p1, player2Score: p2 } = data;
        player1Score = p2;
        player2Score = p1;
        // console.log(player1Score, player2Score);
        scoreText.setText(
          `Player 1: ${player1Score} - Player 2: ${player2Score}`
        );
      });

      socketIo.on("otherPlayerMoved", (data: any) => {
        // console.log(data);
        opponentPaddle.x = data.x;
        opponentPaddle.y = data.y;
      });

      if (!eventOn) {
        eventOn = true;
      }

      const self = this;
      let { puck }: any = self;
      interface Ikeyboard {
        input: {
          keyboard: any;
        };
      }
      let {
        input: { keyboard },
      }: Ikeyboard = self;
      cursors = keyboard.createCursorKeys();

      //width: 1720 / 2 = 860 - 137.5 =
      // height: 1020 / 2 = 510

      const opponentPaddle = this.physics.add
        .sprite(1200, 510, "paddle")
        .setImmovable()
        .setCollideWorldBounds(true);

      myPaddle = this.physics.add
        .sprite(510, 510, "paddle")
        .setImmovable()
        .setCollideWorldBounds(true);

      this.physics.add.collider(opponentPaddle, puck);
      this.physics.add.collider(myPaddle, puck);

      puck = this.physics.add
        .sprite(860, 510, "puck")
        .setCollideWorldBounds(true)
        .setBounce(1);

      // console.log(puck.width);

      this.physics.add.collider(opponentPaddle, puck, () => {
        const diffX = puck.x - opponentPaddle.x; // 퍽과 패들의 x축 거리 계산
        puck.setVelocityX(10 * diffX); // x축 거리에 따라 퍽에 가로 방향 속도 적용

        const diffY = puck.y - opponentPaddle.y; // 퍽과 패들의 y축 거리 계산
        puck.setVelocityY(10 * diffY); // y축 거리에 따라 퍽에 세로 방향 속도 적용
      });

      const goalWidth = 50; // 골대 너비
      const goalHeight = 400; // 골대 높이
      // Create red and blue goals
      const redGoal = this.physics.add
        .sprite(30, Number(game.config.height) / 2, "paddle")
        .setDisplaySize(50, 400)
        .setSize(500, 500)
        .setTint(0xff0000)
        .setImmovable();
      // .setSize(50, 400); // 충돌 영역 설정

      const blueGoal = this.physics.add
        .sprite(
          Number(game.config.width) - 30,
          Number(game.config.height) / 2,
          "paddle"
        )
        .setDisplaySize(50, 400)
        .setSize(500, 500)
        .setTint(0x0000ff)
        .setImmovable();
      // .setSize(50, 400); // 충돌 영역 설정

      scoreText = this.add.text(16, 16, "Player 1: 0 - Player 2: 0", {
        fontSize: "32px",
        color: "#fff",
        // fill: "#fff", // 흰색으로 변경
      });

      this.physics.add.collider(redGoal, puck, () => {
        player1Score++;
        updateScore();
        resetPuck();
      });
      this.physics.add.collider(blueGoal, puck, () => {
        player2Score++;
        updateScore();
        resetPuck();
      });
      opponentPaddle.setScale(0.5); // 크기 조정 예시 (가로 세로 반으로 줄임)
      myPaddle.setScale(0.5); // 크기 조정 예시 (가로 세로 반으로 줄임)
      puck.setScale(0.5); // 크기 조정 예시 (가로 세로 반으로 줄임)
      myPaddle.width = 50;
      this.physics.add.collider(myPaddle, puck, () => {
        const diffX = puck.x - myPaddle.x; // 퍽과 패들의 x축 거리 계산
        puck.setVelocityX(1 * diffX); // x축 거리에 따라 퍽에 가로 방향 속도 적용
      });

      keyboard.on("keydown", function (event: KeyboardEvent) {
        if (event.key === "ArrowLeft") {
          myPaddle.setVelocityX(-300);
          myPaddle.setVelocityY(0); // 좌우로 이동할 때 수직 방향의 속도를 0으로 설정
        } else if (event.key === "ArrowRight") {
          myPaddle.setVelocityX(300);
          myPaddle.setVelocityY(0); // 좌우로 이동할 때 수직 방향의 속도를 0으로 설정
        } else if (event.key === "ArrowUp") {
          // 화살표 위 방향키 처리
          myPaddle.setVelocityY(-300); // 위 방향키를 눌렀을 때 패들을 위로 이동시키는 속도 설정
          myPaddle.setVelocityX(0); // 위로 이동할 때 좌우 속도를 0으로 설정
        } else if (event.key === "ArrowDown") {
          // 화살표 아래 방향키 처리
          myPaddle.setVelocityY(300); // 아래 방향키를 눌렀을 때 패들을 아래로 이동시키는 속도 설정
          myPaddle.setVelocityX(0); // 아래로 이동할 때 좌우 속도를 0으로 설정
        }
      });

      keyboard.on("keyup", function (event: KeyboardEvent) {
        if (
          (event.key === "ArrowLeft" || event.key === "ArrowRight") &&
          Number(myPaddle.body!.velocity.x) !== 0 // 현재 x 속도가 0이 아닌 경우에만 x 속도를 0으로 설정
        ) {
          myPaddle.setVelocityX(0);
        } else if (
          (event.key === "ArrowUp" || event.key === "ArrowDown") &&
          Number(myPaddle.body!.velocity.y) !== 0 // 현재 y 속도가 0이 아닌 경우에만 y 속도를 0으로 설정
        ) {
          myPaddle.setVelocityY(0);
        }
      });

      // 마우스 이벤트 부분 제거

      const updateScore = () => {
        scoreText.setText(
          `Player 1: ${player1Score} - Player 2: ${player2Score}`
        );
        // console.log("dsfsdfsd");
        socketIo.emit("playerScored", { player1Score, player2Score });
        if (player1Score === 3 || player2Score === 3) {
          endGame();
        }
      };
      function endGame() {
        // 게임 종료 처리
        const winner = player1Score === 3 ? "Player 1" : "Player 2";
        const endText = (game as any)?.add?.text(
          Number(game.config.width) / 2,
          Number(game.config.height) / 2,
          `${winner} wins!`,
          {
            fontSize: "48px",
            fill: "#fff",
          }
        );
        endText.setOrigin(0.5);
        // 여기서 게임을 멈추거나 다른 작업을 할 수 있습니다.
      }
      const resetPuck = () => {
        puck.setPosition(
          Number(game.config.width) / 2,
          Number(game.config.height) / 2
        );
        puck.setVelocity(0, 0);
      };
    }

    function update(this: Phaser.Scene) {
      // console.log("Ss");
      // console.log(this);

      socketIo.emit("playerPosition", {
        x: 1200 - (myPaddle.x - 510),
        y: myPaddle.y,
      });
    }
  }, []);

  return <div id="phaser-game" ref={gameRef}></div>;
}

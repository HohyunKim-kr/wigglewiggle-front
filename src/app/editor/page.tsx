"use client";
import PaintBoard from "@/components/paintBoard/PaintBoard";
import { styled } from "styled-components";
import Image from "next/image";
import { useState } from "react";
import colors from "@/styles/color";
import YellowShortButton from "@/components/YellowShortButton";
import SellThisClothing from "@/components/modal/sell-this-clothing";

const Editor = () => {
  const [canvasImageUrl, setCanvasImageUrl] = useState("");
  const [isCharacterDressedUp, setIsCharacterDressedUp] = useState(false);
  const [openedModal, setOpenedModal] = useState("");

  return (
    <>
      {openedModal === "sell" && (
        <SellThisClothing onClose={() => setOpenedModal("")} />
      )}

      <Container>
        <TopWrapper>You can create clothes for Wiggles here.</TopWrapper>
        <BottomWrapper>
          <PaintBoardWrapper>
            <PaintBoard
              isCharacterDressedUp={isCharacterDressedUp}
              setIsCharacterDressedUp={setIsCharacterDressedUp}
              setCanvasImageUrl={setCanvasImageUrl}
            />
          </PaintBoardWrapper>
          <ArrowImageWrapper onClick={() => setIsCharacterDressedUp(true)}>
            <Image src="/arrow.png" alt="arrow" width={200} height={200} />
            <ArrowImageText>Dress up a character</ArrowImageText>
          </ArrowImageWrapper>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <MergedImageWrapper>
              <BackgroundImage
                src="/images/free_character.png"
                alt="free character"
                width={500}
                height={500}
              />
              {canvasImageUrl !== "" && (
                <MergedImage
                  src={canvasImageUrl}
                  alt="merged image"
                  width={500}
                  height={500}
                />
              )}
            </MergedImageWrapper>
            {canvasImageUrl !== "" && (
              <YellowShortButton
                text="Sell this cloth"
                fontSize="30px"
                onClickHandler={() => setOpenedModal("sell")}
              />
            )}
          </div>
        </BottomWrapper>
      </Container>
    </>
  );
};

export default Editor;

const Container = styled.div`
  height: calc(100vh - 100px);

  padding: 30px 50px;
`;

const TopWrapper = styled.div`
  width: 100%;
  color: ${colors.white};
  font-size: 40px;
  font-weight: 500;

  /* border: 1px solid white; */
`;

const BottomWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid white; */
`;
const PaintBoardWrapper = styled.div`
  width: 500px;
`;

const ArrowImageWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  /* border: 1px solid white; */
  cursor: pointer;
`;

const ArrowImageText = styled.div`
  color: black;
  position: absolute;

  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);

  font-size: 18px;
  font-weight: 700;
  line-height: 130%;
`;

const MergedImageWrapper = styled.div`
  width: 500px;
  height: 500px;
  /* background-color: white; */
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled(Image)`
  width: 500px;
  height: 500px;

  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const MergedImage = styled(Image)`
  width: 500px;
  height: 500px;

  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

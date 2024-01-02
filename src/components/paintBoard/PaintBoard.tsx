import colors from "@/styles/color";
import React, {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import styled from "styled-components";

type Props = {
  isCharacterDressedUp: boolean;
  setIsCharacterDressedUp: Dispatch<SetStateAction<boolean>>;
  setCanvasImageUrl: Dispatch<SetStateAction<string>>;
};

const PaintBoard = ({
  isCharacterDressedUp,
  setIsCharacterDressedUp,
  setCanvasImageUrl,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [drawColor, setDrawColor] = useState<string>("black");
  const [drawWidth, setDrawWidth] = useState<string>("2");
  const [restoreArray, setRestoreArray] = useState<ImageData[]>([]);
  const [index, setIndex] = useState<number>(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      canvas.width = 500; // 캔버스 너비 설정
      canvas.height = 500; // 캔버스 높이 설정
      // context.fillStyle = "whitesmoke";
      // context.fillRect(0, 0, canvas.width, canvas.height);
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (isCharacterDressedUp && canvas) {
      console.log("안녕");
      setIsCharacterDressedUp(!isCharacterDressedUp);
      const imageUrl = canvas.toDataURL("image/png");
      setCanvasImageUrl(imageUrl);
    }
  }, [isCharacterDressedUp]);

  // Function to handle color change
  const handleColorChange = (event: any) => {
    setDrawColor(event.target.value);
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    const context = canvasRef.current?.getContext("2d");
    if (context) {
      context.closePath();
      saveCurrentState();
    }

    setIsDrawing(false);
  };

  const saveCurrentState = () => {
    const canvas = canvasRef.current;
    const context = canvasRef.current?.getContext("2d");
    if (canvas && context) {
      restoreArray.push(
        context.getImageData(0, 0, canvas.width, canvas.height)
      );
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const undoLast = () => {
    if (index <= 0) {
      clearCanvas();
    } else {
      setIndex((prevIndex) => prevIndex - 1);
      const context = canvasRef.current?.getContext("2d");
      // 이전 상태를 복원하기 전에 index 값을 감소시킵니다.
      context?.putImageData(restoreArray[index - 1], 0, 0);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvasRef.current?.getContext("2d");
    if (canvas && context) {
      context.fillStyle = "whitesmoke";
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
    setRestoreArray([]);
    setIndex(-1);
  };

  const startDrawing = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    const canvas = canvasRef.current;
    const context = canvasRef.current?.getContext("2d");
    if (canvas && context) {
      const rect = canvas.getBoundingClientRect();
      setIsDrawing(true);
      saveCurrentState(); // 현재 상태 저장
      context.beginPath();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      context.moveTo(
        (event.clientX - rect.left) * scaleX,
        (event.clientY - rect.top) * scaleY
      );
    }
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const context = canvasRef.current?.getContext("2d");
    if (canvas && context) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      context.lineTo(
        (event.clientX - rect.left) * scaleX,
        (event.clientY - rect.top) * scaleY
      );
      context.stroke();
    }
  };

  const download = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.toBlob((blob) => {
        if (blob) {
          const timestamp = new Date().getTime();
          const a = document.createElement("a");
          document.body.appendChild(a);
          a.download = `export${timestamp}.png`;
          a.href = URL.createObjectURL(blob);
          a.click();
          a.remove();
        }
      }, "image/png");
    }
  };

  return (
    <div>
      <StyledCanvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      />
      <ToolBar>
        <input type="color" value={drawColor} onChange={handleColorChange} />
        <input
          type="range"
          min="1"
          max="20"
          value={drawWidth}
          onChange={(e) => setDrawWidth(e.target.value)}
        />
        <PaintBoardButton onClick={saveCurrentState}>save</PaintBoardButton>
        <PaintBoardButton onClick={undoLast}>undo</PaintBoardButton>
        <PaintBoardButton onClick={clearCanvas}>clear</PaintBoardButton>
        <PaintBoardButton onClick={download}>download</PaintBoardButton>
      </ToolBar>
    </div>
  );
};

export default PaintBoard;

export const StyledCanvas = styled.canvas`
  width: 500px; // 너비를 500px로 설정
  height: 500px; // 높이를 500px로 설정
  cursor: pointer;
  border: 1px solid ${colors.white}; // 테두리 추가
`;

export const ToolBar = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const ColorField = styled.div<{ $isClicked: boolean }>`
  height: 40px;
  width: 40px;
  min-height: 40px;
  min-width: 40px;
  cursor: pointer;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  border: ${(props) =>
    props.$isClicked ? "2px solid black" : "2px solid white"};
  align-self: center;
`;

export const PaintBoardButton = styled.button`
  align-self: center;
  width: 100px;
  height: 40px;
  border: 2px solid white;
  cursor: pointer;
  color: white;
  background: #222;
  font-weight: bold;
  margin: 0 6px;
`;

export const ColorPicker = styled.div`
  align-self: center;
  margin: 0 10px;
  height: 50px;
`;

export const PenRange = styled.input`
  align-self: center;
  margin: 0 10px;
`;

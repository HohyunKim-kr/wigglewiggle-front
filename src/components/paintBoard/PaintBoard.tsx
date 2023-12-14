import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const PaintBoard = () => {
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
      canvas.width = window.innerWidth;
      canvas.height = 600;
      context.fillStyle = "whitesmoke";
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  // Function to handle color change
  const handleColorChange = (event: any) => {
    setDrawColor(event.target.value);
  };

  //   const startDrawing = (
  //     event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  //   ) => {
  //     const rect = canvasRef.current?.getBoundingClientRect();
  //     const context = canvasRef.current?.getContext("2d");
  //     if (rect && context) {
  //       setIsDrawing(true);
  //       context.beginPath();
  //       context.moveTo(event.clientX - rect.left, event.clientY - rect.top);
  //     }
  //   };

  const startDrawing = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    const context = canvasRef.current?.getContext("2d");
    if (rect && context) {
      setIsDrawing(true);
      saveCurrentState(); // 현재 상태 저장
      context.beginPath();
      context.moveTo(event.clientX - rect.left, event.clientY - rect.top);
    }
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDrawing) return;
    const context = canvasRef.current?.getContext("2d");
    const rect = canvasRef.current?.getBoundingClientRect();
    if (context && rect) {
      context.lineTo(event.clientX - rect.left, event.clientY - rect.top);
      context.strokeStyle = drawColor;
      context.lineWidth = parseInt(drawWidth);
      context.lineCap = "round";
      context.lineJoin = "round";
      context.stroke();
    }
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

  //   const saveCurrentState = () => {
  //     const canvas = canvasRef.current;
  //     const context = canvasRef.current?.getContext("2d");
  //     if (canvas && context) {
  //       restoreArray.push(
  //         context.getImageData(0, 0, canvas.width, canvas.height)
  //       );
  //       setIndex(index + 1);
  //     }
  //   };

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

  //   const undoLast = () => {
  //     if (index <= 0) {
  //       clearCanvas();
  //     } else {
  //       setIndex(index - 1);
  //       const context = canvasRef.current?.getContext("2d");
  //       context?.putImageData(restoreArray[index], 0, 0);
  //     }
  //   };

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

  const download = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.toBlob((blob) => {
        if (blob) {
          // 현재 시간을 기반으로 파일 이름 생성
          const timestamp = new Date().getTime();
          const a = document.createElement("a");
          document.body.appendChild(a);
          a.download = `export${timestamp}.png`;
          a.href = URL.createObjectURL(blob);
          a.click();
          a.remove();
        }
      });
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
        <Button onClick={saveCurrentState}>save</Button>
        <Button onClick={undoLast}>undo</Button>
        <Button onClick={clearCanvas}>clear</Button>
        <Button onClick={download}>download</Button>
      </ToolBar>
    </div>
  );
};

export default PaintBoard;

export const StyledCanvas = styled.canvas`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
  background-color: whitesmoke;
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

export const Button = styled.button`
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

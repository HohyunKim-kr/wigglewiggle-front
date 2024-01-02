"use client";
import PaintBoard from "@/components/paintBoard/PaintBoard";
import { styled } from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
const Editor = () => {
  const [canvasImageUrl, setCanvasImageUrl] = useState("");
  const [isCharacterDressedUp, setIsCharacterDressedUp] = useState(false);

  return (
    <Container>
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
      <MergedImageWrapper>
        {/* <MergedImage src="/arrow.png" alt="arrow" width={500} height={500} /> */}
        <MergedImage
          src={canvasImageUrl ? canvasImageUrl : "/arrow.png"}
          alt="merged image"
          width={500}
          height={500}
        />
      </MergedImageWrapper>
    </Container>
  );
};

export default Editor;

const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
  align-items: center;
`;

const PaintBoardWrapper = styled.div`
  width: 500px;
  height: 500px;
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
  background-color: white;
  position: relative;
  overflow: hidden;
`;

const MergedImage = styled(Image)`
  width: 500px;
  height: 500px;

  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

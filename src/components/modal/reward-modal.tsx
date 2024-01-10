"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";
import colors from "@/styles/color";

interface ModalProps {
  onClose: () => void;
}

type Props = {
  imgSrc: string;
  name: string;
};

const RewardModal = ({ onClose, imgSrc, name }: ModalProps & Props) => {
  return (
    <>
      <ModalOverlay>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "flex" }}>
            <CloseButton onClick={onClose}>X</CloseButton>
          </div>
          <Inner>
            <Congratulation>Congratulations!</Congratulation>
            <ClothesImg src={imgSrc} alt={name} />
            <Name>{name}</Name>
          </Inner>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default RewardModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: ${colors.white};
  padding: 20px;
  border: 3px solid #bb9f00;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  font-family: "ABeeZee";
  width: fit-content;
  height: fit-content;
  padding: 5px;
  background: none;
  border: none;
  font-size: 40px;
  color: primary;
  margin-left: auto;
  cursor: pointer;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

`;

const Congratulation = styled.p`
  color:#bb9f00;
  font-size: 40px;
  margin: 0;
  margin-top: 5px;
`;

const ClothesImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 18px;
  margin: 20px;
`;

const Name = styled.p`
  color: ${colors.black};
  font-size: 35px;
  margin: 0;
  margin-top: 5px;
`;

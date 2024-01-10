"use client";
import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { useState } from "react";
import styled from "styled-components";
import colors from "@/styles/color";

interface ModalProps {
  onClose: () => void;
  clothingName: string;
  setClothingName: Dispatch<SetStateAction<string>>;
  clothingPrice: number;
  setClothingPrice: Dispatch<SetStateAction<number>>;
  setIsCreationConfirmed: Dispatch<SetStateAction<boolean>>;
}

const SellThisClothing = ({
  onClose,
  clothingName,
  setClothingName,
  clothingPrice,
  setClothingPrice,
  setIsCreationConfirmed,
}: ModalProps) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClothingName(e.target.value);
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClothingPrice(Number(e.target.value));
  };
  return (
    <>
      <ModalOverlay>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "flex" }}>
            <CloseButton onClick={onClose}>X</CloseButton>
          </div>
          <Inner>
            <Title>Sell This Clothing</Title>
            <ClothesGrade>A</ClothesGrade>
            <InputWrapper>
              <ClothesName>
                <InnerTitle>name : </InnerTitle>
                <Input
                  type="text"
                  value={clothingName}
                  onChange={handleNameChange}
                />
              </ClothesName>
              <ClothesPrice>
                <InnerTitle>price : </InnerTitle>
                <Input
                  value={clothingPrice}
                  onChange={handlePriceChange}
                  style={{ marginLeft: "17px" }}
                  type="number"
                />
                <Matic>Matic</Matic>
              </ClothesPrice>
            </InputWrapper>
            <Explanation>
              <p style={{ margin: "0" }}>
                It costs 50 Matic to sell this clothing
              </p>
              <p style={{ margin: "0" }}>on the marketplace</p>
            </Explanation>
            <Confirm
              onClick={() => {
                setIsCreationConfirmed(true);
                // onClose();
              }}
            >
              Confirm
            </Confirm>
          </Inner>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default SellThisClothing;

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 999;
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
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  font-family: "ABeeZee";
  width: fit-content;
  height: fit-content;
  background: none;
  border: none;
  font-size: 30px;
  color: ${colors.black};
  margin-left: auto;
  cursor: pointer;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
`;

const ClothesGrade = styled.div`
  font-size: 100px;
  font-weight: 600;
  color: red;
  margin-bottom: 10px;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ClothesName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;
const ClothesPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

const InnerTitle = styled.div`
  font-size: 25px;
`;
const Input = styled.input`
  margin-left: 8px;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #000000;
  border-radius: 5px;
  outline: none;
`;
const Matic = styled.div`
  font-size: 25px;
  margin-left: 5px;
`;
const Explanation = styled.div`
  font-size: 30px;
  margin: 20px;
  margin-top: 0px;
  text-align: center;
`;

const Confirm = styled.button`
  font-family: "ABeeZee";
  font-size: 30px;
  margin-bottom: 20px;
  color: ${colors.black};
  height: fit-content;
  width: fit-content;
  border-radius: 18px;
  border-color: ${colors.primary};
  background: ${colors.primary};
  padding: 0 29px;
  cursor: pointer;
`;

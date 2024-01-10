"use client";
import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { useState } from "react";
import styled from "styled-components";
import colors from "@/styles/color";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  OKButtonHandler: () => void;
}

const SuccessModal = ({ onClose, children, OKButtonHandler }: ModalProps) => {
  return (
    <>
      <ModalOverlay>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "flex" }}>
            <CloseButton onClick={onClose}>X</CloseButton>
          </div>
          <Inner>
            <Title>Success 👏</Title>
            {children}
            <OKButton onClick={() => OKButtonHandler()}>OK</OKButton>
          </Inner>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default SuccessModal;

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

const OKButton = styled.button`
  font-family: "ABeeZee";
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${colors.black};
  height: fit-content;
  width: fit-content;
  border-radius: 18px;
  border-color: ${colors.primary};
  background: ${colors.primary};
  padding: 0 29px;
  cursor: pointer;
`;

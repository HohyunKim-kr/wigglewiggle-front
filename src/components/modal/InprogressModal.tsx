"use client";
import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { useState } from "react";
import styled from "styled-components";
import colors from "@/styles/color";

interface ModalProps {
  children: React.ReactNode;
}

const InProgressModal = ({ children }: ModalProps) => {
  return (
    <>
      <ModalOverlay>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <Inner>
            <Title>In Progress⏳</Title>
            {children}
          </Inner>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default InProgressModal;

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

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
`;

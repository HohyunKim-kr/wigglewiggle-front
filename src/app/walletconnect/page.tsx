"use client";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Title>Wiggle Wiggle</Title>
      <PeachButton> WALLET CONNECT </PeachButton>
    </div>
  );
}

const PeachButton = styled.button`
  display: flex;
  height: 60px;
  padding: 16px 100px;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 500px;
  background: var(--background-primary, #f8d49e);
  margin-top: 99px;
  margin-left: 40%;
`;

const Title = styled.div`
  color: var(--text-default, #fff);
  font-family: Acme;
  font-size: 140px;
  font-style: normal;
  font-weight: 400;
  line-height: 90%; /* 126px */
  margin-top: 500px;
  margin-left: 32%;
`;

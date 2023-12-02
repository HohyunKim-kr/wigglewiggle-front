"use client";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <PeachButton>Game Start</PeachButton>
    </div>
  );
}

const PeachButton = styled.button`
  width: 430px;
  height: 100px;
  background-color: #f8d492;
`;

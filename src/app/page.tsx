"use client";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <PeachButton>Game Start</PeachButton>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

const PeachButton = styled.button`
  width: 430px;
  height: 100px;
  background-color: #f8d492;
`;

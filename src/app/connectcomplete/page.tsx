"use client";
import Image from "next/image";
import styled from "styled-components";
const Editor = () => {
  return (
    <div>
      <Complete>Resistration completed</Complete>
      <Button> LOG IN & MAIN PAGE </Button>
    </div>
  );
};

const Button = styled.button`
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

const Complete = styled.div`
  color: var(--text-default, #fff);
  font-family: Acme;
  font-size: 140px;
  font-style: normal;
  font-weight: 400;
  line-height: 90%; /* 126px */
  margin-top: 500px;
  margin-left: 23%;
`;

export default Editor;

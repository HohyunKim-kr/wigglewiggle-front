"use client";

import { styled } from "styled-components";
import React from "react";
import colors from "@/styles/color";

const FridayAllNightWeekend = () => {
  return (
    <Container>
      <Title>Friday All Night Weekend</Title>
      <Element>
        Today is the day for a 1:1 battle where you can seize the opponent&#39;s
        premium clothing. Battle participation requirements:
      </Element>
      <RequirementsWrapper>
        <Requirements>• You should own a premium character.</Requirements>
        <Requirements>• You should possess premium clothing.</Requirements>
        <Requirements>
          • You should grant permission for premium asset authority.
        </Requirements>
      </RequirementsWrapper>
      <Participate>Participate in A battle pool</Participate>
      <Participate>Participate in B battle pool</Participate>
      <Participate>Participate in C battle pool</Participate>
      <Footer>
        The service provider will not exploit the user&#39;s permission to
        misuse the user&#39;s assets arbitrarily
      </Footer>
    </Container>
  );
};

export default FridayAllNightWeekend;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  margin: 20px;
  margin-top: 50px;
  font-size: 50px;
  color: ${colors.primary};
`;
const Element = styled.div`
  font-size: 35px;
  width: 80%;
  color: #ffffff;
`;
const RequirementsWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const Requirements = styled.div`
  font-size: 30px;
  margin-left: 20px;
  color: #ffe6c0;
`;
const Participate = styled.button`
  font-family: "ABeeZee";
  font-size: 30px;
  margin: 20px;
  color: ${colors.black};
  height: fit-content;
  width: fit-content;
  border-radius: 5px;
  border-color: ${colors.primary};
  background: ${colors.primary};
  padding: 20px 29px;
  cursor: pointer;
`;
const Footer = styled.div`
  font-size: 20px;
  margin: 20px;
  margin-top: 40px;
  width: 80%;
  text-align: center;
  color: ${colors.button};
`;

"use client";

import { styled } from "styled-components";
import React from "react";
import { useState } from "react";
import colors from "@/styles/color";
import SuccessModal from "@/components/modal/SuccessModal";

const FridayAllNightWeekend = () => {
  const [openedModal, setOpenedModal] = useState("");
  return (
    <>
      {openedModal === "success" && (
        <SuccessModal
          onClose={() => setOpenedModal("")}
          OKButtonHandler={() => setOpenedModal("")}
        >
          <Win>You Win!!</Win>
          <Content>
            You have won one piece of Clothing from the opposing player in the
            game.
          </Content>
          <ItemImg src="/images/cat.jpeg" />
        </SuccessModal>
      )}

      <Container>
        <Title>🎉Friday All Night Weekend🎉</Title>
        <Element>
          Today is the day for a 1:1 battle where you can seize the
          opponent&#39;s premium clothing.
        </Element>
        <div style={{ marginBottom: "40px" }}>
          <Element style={{ marginTop: "30px", fontSize: "32px" }}>
            Battle Participation Requirements:
          </Element>
          <RequirementsWrapper>
            <Requirements>✅ You should own a premium character.</Requirements>
            <Requirements>✅ You should possess premium clothing.</Requirements>
            <Requirements>
              ✅ You should grant permission for premium asset authority.
            </Requirements>
          </RequirementsWrapper>
        </div>
        <Participate onClick={() => setOpenedModal("success")}>
          Participate in A battle pool
        </Participate>
        <Participate>Participate in B battle pool</Participate>
        <Participate>Participate in C battle pool</Participate>
        <Footer>
          The service provider will not exploit the user&#39;s permission to
          misuse the user&#39;s assets arbitrarily
        </Footer>
      </Container>
    </>
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
  margin-top: 30px;
  font-size: 60px;
  color: ${colors.primary};
`;
const Element = styled.div`
  font-size: 35px;
  width: 80%;
  color: #ffffff;
`;
const RequirementsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;
const Requirements = styled.div`
  font-size: 30px;
  color: #ffe6c0;
  display: flex;
`;
const Participate = styled.button`
  font-family: "ABeeZee";
  font-size: 30px;
  margin-bottom: 20px;
  width: 40%;
  color: ${colors.black};
  height: fit-content;
  border-radius: 10px;
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

const Win = styled.div`
  color: #bb9f00;
  font-size: 40px;
  margin: 0;
  margin-top: 5px;
`;
const Content = styled.div`
  color: ${colors.black};
  font-size: 35px;
  margin: 0;
  margin-top: 5px;
`;
const ItemImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 18px;
  margin: 20px;
`;

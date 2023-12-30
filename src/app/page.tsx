"use client";
import AfterLogin from "@/components/AfterLogin";
import W3AWallet from "@/components/W3AWallet";
import YellowLongButton from "@/components/YellowLongButton";
import { getIsLoggedInState } from "@/redux/slice/authSlice";
import colors from "@/styles/color";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Home() {
  const isLoggedIn = useSelector(getIsLoggedInState);

  return isLoggedIn ? <AfterLogin /> : <BeforeLogin />;
}

const BeforeLogin = () => {
  return (
    <BeforeLoginContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Title>Wiggle Wiggle</Title>
        <W3AWallet />
      </div>
    </BeforeLoginContainer>
  );
};

const BeforeLoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: ${colors.white};
  font-family: Acme;
  font-size: 140px;
  font-style: normal;
  font-weight: 400;
  line-height: 90%;
`;

//deploy용 추가

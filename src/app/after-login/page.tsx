"use client";
import YellowButton from "@/components/YellowButton";
import colors from "@/styles/color";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import styled from "styled-components";

const AfterLogin = () => {
  const router = useRouter();
  return (
    <Container>
      <Section>
        <div>
          <PlayMessage>{"Let's play"}</PlayMessage>
          <GameName>Wiggle Wiggle</GameName>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <YellowButton
              text="Game Start"
              margin="167px 0 0 0"
              onClickHandler={() => router.push("/game")}
            />
          </div>
        </div>
      </Section>
      <Section>
        <EditorWrapper>
          <EditorPreview>editor preview가 들어갈 자리</EditorPreview>
          <YellowButton
            text="Editor"
            onClickHandler={() => router.push("/editor")}
          ></YellowButton>
        </EditorWrapper>
      </Section>
      <Section>
        <MarketplaceWrapper>
          <YellowButton
            text="Market Place"
            onClickHandler={() => router.push("/market-place")}
          />
          <MarketPlacePreview>
            marketplace preview가 들어갈 자리
          </MarketPlacePreview>
        </MarketplaceWrapper>
      </Section>
    </Container>
  );
};

export default AfterLogin;

const Container = styled.div`
  height: calc(300vh - 300px);
`;

const Section = styled.div`
  height: calc(100vh - 100px);
  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PlayMessage = styled.div`
  color: #face8d;
  font-family: AnekDevanagari;
  font-size: 80px;
  line-height: 90%;

  width: 100%;
  text-align: center;
  /* margin-top: 246px; */ //figma에 나와있는 양
  /* margin-top: 200px; */
`;

const GameName = styled.div`
  color: ${colors.white};
  font-family: Acme;
  font-size: 160px;
  font-style: normal;
  font-weight: 400;
  line-height: 90%;

  width: 100%;
  text-align: center;
`;

const EditorWrapper = styled.div`
  width: 100%;
  padding: 0 50px 0 174px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditorPreview = styled.div`
  width: 500px;
  height: 347px;
  border: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const MarketplaceWrapper = styled.div`
  width: 100%;
  padding: 0 88px 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MarketPlacePreview = styled.div`
  width: 800px;
  height: 327px;
  border: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: center;
`;

"use client";

import colors from "@/styles/color";
import { styled } from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

import PremiumCharacterModal from "@/components/modal/market-place-modal/character-modal/PremiumCharacterModal";
import PremiumClothesModal from "@/components/modal/market-place-modal/clothes-modal/PremiumClothesModal";
import PremiumCharacterBlock from "@/components/PremiumCharacterBlock";
import PremiumClothesBlock from "@/components/PremiumClothesBlock";
import premiumCharacterList from "../../../lib/premiumCharacter.json";

type IPremiumCharacter = {
  name: string;
  URI: string;
};

const initialPremiumCharacter = {
  name: "",
  URI: "",
};

const MarketPlacePremium = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [openedModal, setOpenedModal] = useState("");
  const [premiumCharacter, setPremiumCharacter] = useState<IPremiumCharacter>(
    initialPremiumCharacter
  );

  return (
    <>
      {openedModal === "character" && (
        <PremiumCharacterModal
          URI={premiumCharacter.URI}
          name={premiumCharacter.name}
          tokenId={""}
          price={"100 Matic"}
          onClose={() => setOpenedModal("")}
        />
      )}
      {openedModal === "clothes" && (
        <PremiumClothesModal
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          tokenId={"dksfldkfsdlkfkdjf"}
          price={"$000"}
          onClose={() => setOpenedModal("")}
        />
      )}

      <Container>
        <Header>
          <FreeOrPremium
            onClick={() => router.push("/market-place/free")}
            $isClicked={pathname === "/market-place/free"}
          >
            Free
          </FreeOrPremium>
          <Item style={{ fontSize: "50px", margin: "0" }}>|</Item>
          <FreeOrPremium
            onClick={() => router.push("/market-place/premium")}
            $isClicked={pathname === "/market-place/premium"}
          >
            Premium
          </FreeOrPremium>
        </Header>
        <MyProperty>
          <MyCharacterContainer>
            <Title>Characters</Title>
            <MyCharacter>
              {premiumCharacterList.map((premiumCharacter, index) => (
                <PremiumCharacterBlock
                  imgSrc={"https://ipfs.io/ipfs/" + premiumCharacter.URI}
                  name={premiumCharacter.name}
                  price={"100 Matic"}
                  onClickHandler={() => {
                    setOpenedModal("character");
                    setPremiumCharacter(premiumCharacter);
                  }}
                  key={index}
                />
              ))}
            </MyCharacter>
          </MyCharacterContainer>

          <MyClothesContainer>
            <Title>Clothings</Title>
            <MyClothes>
              <PremiumClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"A+"}
                onClickHandler={() => setOpenedModal("clothes")}
              />
              <PremiumClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"B+"}
                onClickHandler={() => setOpenedModal("clothes")}
              />
              <PremiumClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"C+"}
                onClickHandler={() => setOpenedModal("clothes")}
              />
              <PremiumClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"A+"}
                onClickHandler={() => setOpenedModal("clothes")}
              />
              <PremiumClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"A+"}
                onClickHandler={() => setOpenedModal("clothes")}
              />
              <PremiumClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"A+"}
                onClickHandler={() => setOpenedModal("clothes")}
              />
              <PremiumClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                tier={"A+"}
                onClickHandler={() => setOpenedModal("clothes")}
              />
            </MyClothes>
          </MyClothesContainer>
        </MyProperty>
      </Container>
    </>
  );
};

export default MarketPlacePremium;

const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 30px;
  padding-bottom: 0px;
  display: flex;
  justify-content: space-between;
`;
const FreeOrPremium = styled.button<{ $isClicked: boolean }>`
  font-size: 45px;
  color: #dbd8cf;
  height: fit-content;
  width: fit-content;
  border: 0;
  background: transparent;
  padding: 0 19px;
  float: left;
  color: ${(props) => (props.$isClicked ? colors.primary : colors.button)};
  cursor: pointer;
`;

const MyProperty = styled.section`
  display: flex;
  padding: 0px 80px;
  justify-content: space-between;
`;
const MyCharacterContainer = styled.div`
  width: auto;
  height: auto;
`;
const MyClothesContainer = styled.div`
  width: auto;
  height: auto;
`;

const MyCharacter = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2열
  grid-template-rows: repeat(2, 1fr); // 2행
  grid-gap: 30px; // 격자 사이 간격
  margin-top: 20px;
`;
const MyClothes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 2열
  grid-gap: 20px; // 격자 사이 간격
  margin-top: 20px;
`;

const Title = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  color: #d3d3d3;
  font-size: 40px;
`;

const Item = styled.div`
  color: #d3d3d3;
  font-size: 37px;
  line-height: 90%;
  margin-bottom: 25px;
  margin-left: 35px;
`;

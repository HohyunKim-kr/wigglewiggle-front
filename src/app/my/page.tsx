"use client";

import { styled } from "styled-components";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import PremiumCharacterModal from "@/components/modal/my-modal/my-character-modal/PremiumCharacterModal";
import PremiumClothesModal from "@/components/modal/market-place-modal/clothes-modal/PremiumClothesModal";
import FreeCharacterModal from "@/components/modal/my-modal/my-character-modal/FreeCharacterModal";
import FreeClothesModal from "@/components/modal/my-modal/my-clothes-modal/FreeClothesModal";

import CharacterBlock from "@/components/CharacterBlock";
import ClothesBlock from "@/components/ClothesBlock";
import ProfileBlock from "@/components/ProfileBlock";

const My = () => {
  const router = useRouter();

  const [openedModal, setOpenedModal] = useState("");

  return (
    <>
      {openedModal === "freeCharacter" && (
        <FreeCharacterModal
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          tokenId={"dksfldkfsdlkfkdjf"}
          price={"$000"}
          onClose={() => setOpenedModal("")}
        />
      )}
      {openedModal === "freeClothes" && (
        <FreeClothesModal
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          tokenId={"dksfldkfsdlkfkdjf"}
          price={"$000"}
          onClose={() => setOpenedModal("")}
        />
      )}
      {openedModal === "premiumCharacter" && (
        <PremiumCharacterModal
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          tokenId={"dksfldkfsdlkfkdjf"}
          price={"$000"}
          onClose={() => setOpenedModal("")}
        />
      )}
      {openedModal === "premiumClothes" && (
        <PremiumClothesModal
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          tokenId={"dksfldkfsdlkfkdjf"}
          price={"$000"}
          onClose={() => setOpenedModal("")}
        />
      )}

      <Container>
        <MyProfile>
          <Item
            style={{
              marginTop: "30px",
              marginLeft: "50px",
              marginBottom: "18px",
            }}
          >
            Profile
          </Item>
          <ProfileBlock
            imgSrc={"/images/cat.jpeg"}
            name={"Cat"}
            wallet={"0x5165161684651561651"}
            myMoney={"$000"}
          />
        </MyProfile>

        <MyProperty>
          <MyCharacterContainer>
            <Title style={{ marginTop: "0px" }}>
              <Item>My Character</Item>
              <Seemore onClick={() => router.push("/my/my-character")}>
                See more
              </Seemore>
            </Title>
            <MyCharacter style={{ marginLeft: "40px" }}>
              <CharacterBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                onClickHandler={() => setOpenedModal("freeCharacter")}
              />
              <CharacterBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                onClickHandler={() => setOpenedModal("freeCharacter")}
              />
              <CharacterBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                onClickHandler={() => setOpenedModal("premiumCharacter")}
              />
              <CharacterBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                onClickHandler={() => setOpenedModal("premiumCharacter")}
              />
            </MyCharacter>
          </MyCharacterContainer>

          <MyClothesContainer>
            <Title style={{ paddingTop: "0px" }}>
              <Item>My Clothes</Item>
              <Seemore onClick={() => router.push("/my/my-clothes")}>
                See more
              </Seemore>
            </Title>
            <MyClothes style={{ marginLeft: "40px" }}>
              <ClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                onClickHandler={() => setOpenedModal("freeClothes")}
              />
              <ClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                onClickHandler={() => setOpenedModal("freeClothes")}
              />
              <ClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                onClickHandler={() => setOpenedModal("freeClothes")}
              />
              <ClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                onClickHandler={() => setOpenedModal("premiumClothes")}
              />
              <ClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                onClickHandler={() => setOpenedModal("premiumClothes")}
              />
              <ClothesBlock
                imgSrc={"/images/cat.jpeg"}
                name={"Cat"}
                price={"$000"}
                onClickHandler={() => setOpenedModal("premiumClothes")}
              />
            </MyClothes>
          </MyClothesContainer>
        </MyProperty>
      </Container>
    </>
  );
};

export default My;

const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
`;

const MyProfile = styled.section``;

const MyProperty = styled.section`
  display: flex;
  flex-direction: column;
`;
const MyCharacterContainer = styled.div`
  width: auto;
  height: auto;
`;
const MyClothesContainer = styled.div`
  width: auto;
  height: auto;
`;

const MyCharacter = styled.div``;
const MyClothes = styled.div``;

const Title = styled.div`
  width: 100%;
  height: fit-content;
  padding: 35px;
  padding-bottom: 0px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Item = styled.div`
  color: #d3d3d3;
  font-size: 37px;
  line-height: 90%;
  margin-bottom: 25px;
  margin-left: 35px;
`;

const Seemore = styled.button`
  font-size: 30px;
  color: #dbd8cf;
  height: fit-content;
  width: fit-content;
  border-radius: 18px;
  border-color: #dbd8cf;
  background: transparent;
  padding: 0 19px;
  float: left;
  cursor: pointer;
`;

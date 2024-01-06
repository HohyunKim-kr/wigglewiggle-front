"use client";

import { styled } from "styled-components";
import React, { useState } from "react";
import PremiumCharacterModal from "@/components/modal/my-modal/my-character-modal/PremiumCharacterModal";
import FreeCharacterModal from "@/components/modal/my-modal/my-character-modal/FreeCharacterModal";
import CharacterBlock from "@/components/FreeCharacterBlock";

const FreeDetail = () => {
  const [openedModal, setOpenedModal] = useState("");

  return (
    <>
      {openedModal === "freeCharacter" && (
        <FreeCharacterModal
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          address={"dksfldkfsdlkfkdjf"}
          price={"$000"}
          onClose={() => setOpenedModal("")}
        />
      )}
      {openedModal === "premiumCharacter" && (
        <PremiumCharacterModal
          imgSrc={"/images/cat.jpeg"}
          name={"Cat"}
          address={"dksfldkfsdlkfkdjf"}
          price={"$000"}
          onClose={() => setOpenedModal("")}
        />
      )}
      <Container>
        <Item style={{ marginTop: "30px" }}>My Character</Item>
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
      </Container>
    </>
  );
};

export default FreeDetail;

const Container = styled.div`
  height: calc(100vh - 100px);
  overflow-x: overlay;
`;

const Item = styled.div`
  color: #d3d3d3;
  font-size: 50px;
  line-height: 90%;
  margin-bottom: 25px;
  margin-left: 35px;
`;

const MyCharacter = styled.div``;

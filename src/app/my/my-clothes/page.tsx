"use client";

import { styled } from "styled-components";
import React, { useState } from "react";
import PremiumClothesModal from "@/components/modal/my-modal/my-clothes-modal/PremiumClothesModal";
import FreeClothesModal from "@/components/modal/my-modal/my-clothes-modal/FreeClothesModal";
import ClothesBlock from "@/components/ClothesBlock";

const FreeDetail = () => {
  const [openedModal, setOpenedModal] = useState("");

  return (
    <>
      {openedModal === "freeClothes" && (
        <FreeClothesModal
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
        <Item style={{ marginTop: "30px" }}>My Clothes</Item>
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
          <ClothesBlock
            imgSrc={"/images/cat.jpeg"}
            name={"Cat"}
            price={"$000"}
            onClickHandler={() => setOpenedModal("premiumClothes")}
          />
        </MyClothes>
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

const MyClothes = styled.div``;
const ClothesImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 18px;
  margin-top: 19px;
`;
const Clothes = styled.div`
  border-radius: 18px;
  background: #292929;
  padding: 0 19px;
  width: fit-content;
  height: fit-content;
  margin-bottom: 25px;
  margin-left: 40px;
  float: left;
`;

const Name = styled.p`
  color: #ffffff;
  font-size: 30px;
  margin-top: 19px;
`;

const Price = styled.p`
  color: #ffeed6;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 25px;
`;

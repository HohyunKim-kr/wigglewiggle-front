"use client";

import { styled } from "styled-components";

const FreeDetail = () => {
  return (
    <Container>
      <Item style={{ marginTop: "30px" }}>My Clothes</Item>
      <MyClothes style={{ marginLeft: "40px" }}>
        <Clothes>
          <ClothesImg src="/images/cat.jpeg" alt="item1" />
          <Name>Cat </Name>
          <Price>0000$ </Price>
        </Clothes>
        <Clothes>
          <ClothesImg src="/images/cat.jpeg" alt="item1" />
          <Name>Cat </Name>
          <Price>0000$ </Price>
        </Clothes>
        <Clothes>
          <ClothesImg src="/images/cat.jpeg" alt="item1" />
          <Name>Cat </Name>
          <Price>0000$ </Price>
        </Clothes>
        <Clothes>
          <ClothesImg src="/images/cat.jpeg" alt="item1" />
          <Name>Cat </Name>
          <Price>0000$ </Price>
        </Clothes>
        <Clothes>
          <ClothesImg src="/images/cat.jpeg" alt="item1" />
          <Name>Cat </Name>
          <Price>0000$ </Price>
        </Clothes>
        <Clothes>
          <ClothesImg src="/images/cat.jpeg" alt="item1" />
          <Name>Cat </Name>
          <Price>0000$ </Price>
        </Clothes>
      </MyClothes>
    </Container>
  );
};

export default FreeDetail;

const Container = styled.div`
  height: calc(100vh - 100px);
  overflow-x: overlay;
`;

const Item = styled.div`
  color: #f8d49e;
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

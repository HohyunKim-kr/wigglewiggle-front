"use client";

import { styled } from "styled-components";

const FreeDetail = () => {
  return (
    <Container>
      <Item style={{ marginTop: "30px" }}>My Character</Item>
      <MyCharacter style={{ marginLeft: "40px" }}>
        <Character>
          <CharacterImg src="/images/cat.jpeg" alt="item1" />
          <Name>Cat </Name>
          <Price>0000$ </Price>
        </Character>
        <Character>
          <CharacterImg src="/images/cat.jpeg" alt="item1" />
          <Name>Cat </Name>
          <Price>0000$ </Price>
        </Character>
        <Character>
          <CharacterImg src="/images/cat.jpeg" alt="item1" />
          <Name>Cat </Name>
          <Price>0000$ </Price>
        </Character>
        <Character>
          <CharacterImg src="/images/cat.jpeg" alt="item1" />
          <Name>Cat </Name>
          <Price>0000$ </Price>
        </Character>
        <Character>
          <CharacterImg src="/images/cat.jpeg" alt="item1" />
          <Name>Cat </Name>
          <Price>0000$ </Price>
        </Character>
      </MyCharacter>
    </Container>
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
const Character = styled.div`
  border-radius: 18px;
  background: #292929;
  padding: 0 19px;
  width: fit-content;
  height: fit-content;
  margin-bottom: 25px;
  margin-left: 40px;
  float: left;
`;
const CharacterImg = styled.img`
  width: 190px;
  height: 255px;
  border-radius: 18px;
  margin-top: 19px;
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

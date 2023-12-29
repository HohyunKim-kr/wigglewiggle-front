"use client";

import { styled } from "styled-components";

const PremiumDetail = () => {
  return (
    <Container>
      <Item style={{ marginTop: "30px" }}>Premium</Item>
      <Card>
        <Img src="/images/cat.jpeg" alt="item1" />
        <Name>Cat </Name>
        <Price>0000$ </Price>
      </Card>
      <Card>
        <Img src="/images/cat.jpeg" alt="item1" />
        <Name>Cat </Name>
        <Price>0000$ </Price>
      </Card>
      <Card>
        <Img src="/images/cat.jpeg" alt="item1" />
        <Name>Cat </Name>
        <Price>0000$ </Price>
      </Card>
      <Card>
        <Img src="/images/cat.jpeg" alt="item1" />
        <Name>Cat </Name>
        <Price>0000$ </Price>
      </Card>
      <Card>
        <Img src="/images/cat.jpeg" alt="item1" />
        <Name>Cat </Name>
        <Price>0000$ </Price>
      </Card>
      <Card>
        <Img src="/images/cat.jpeg" alt="item1" />
        <Name>Cat </Name>
        <Price>0000$ </Price>
      </Card>
      <Card>
        <Img src="/images/cat.jpeg" alt="item1" />
        <Name>Cat </Name>
        <Price>0000$ </Price>
      </Card>
    </Container>
  );
};

export default PremiumDetail;

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
const Card = styled.div`
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
  margin-bottom: 0;
`;

const Price = styled.p`
  color: #ffeed6;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const Img = styled.img`
  width: 235px;
  height: 170px;
  border-radius: 18px;
  margin-top: 19px;
`;

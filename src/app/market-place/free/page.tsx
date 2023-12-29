"use client";

import { styled } from "styled-components";

const FreeDetail = () => {
  return (
    <Container>
      <Item style={{ marginTop: "30px" }}>Free</Item>
      <Card>
        <Img src="/images/cat.jpeg" alt="item1" />
        <Cardname>
          <Name>Cat </Name>
        </Cardname>
      </Card>
      <Card>
        <Img src="/images/cat.jpeg" alt="item1" />
        <Cardname>
          <Name>Cat </Name>
        </Cardname>
      </Card>
      <Card>
        <Img src="/images/cat.jpeg" alt="item1" />
        <Cardname>
          <Name>Cat</Name>
        </Cardname>
      </Card>
      <Card>
        <Img src="/images/cat.jpeg" alt="item1" />
        <Cardname>
          <Name>Cat </Name>
        </Cardname>
      </Card>
      <Card>
        <Img src="/images/cat.jpeg" alt="item1" />
        <Cardname>
          <Name>Cat </Name>
        </Cardname>
      </Card>
      <Card>
        <Img src="/images/cat.jpeg" alt="item1" />
        <Cardname>
          <Name>Cat </Name>
        </Cardname>
      </Card>
      <Card>
        <Img src="/images/cat.jpeg" alt="item1" />
        <Cardname>
          <Name>Cat </Name>
        </Cardname>
      </Card>
      <Card>
        <Img src="/images/cat.jpeg" alt="item1" />
        <Cardname>
          <Name>Cat </Name>
        </Cardname>
      </Card>
      <Card>
        <Img src="/images/cat.jpeg" alt="item1" />
        <Cardname>
          <Name>Cat </Name>
        </Cardname>
      </Card>
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
const Card = styled.div`
  height: 245px;
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

const Img = styled.img`
  width: 235px;
  height: 170px;
  border-radius: 18px;
  margin-top: 19px;
`;

const Cardname = styled.div`
  height: 50px;
`;

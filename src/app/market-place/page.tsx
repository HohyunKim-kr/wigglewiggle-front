"use client";

import { styled } from "styled-components";
import { usePathname, useRouter } from "next/navigation";

const MarketPlace = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Container>
      <div>
        <Title>
          <Item style={{ color: "#ffefd8" }}>Free</Item>
          <Seemore onClick={() => router.push("/market-place/free")}>
            See more
          </Seemore>
        </Title>
        <Scroll>
          <Card>
            <Img src="images/cat.jpeg" alt="item1" />
            <Cardname>
              <Name>Cat </Name>
            </Cardname>
          </Card>
          <Card>
            <Img src="images/cat.jpeg" alt="item1" />
            <Cardname>
              <Name>Cat </Name>
            </Cardname>
          </Card>
          <Card>
            <Img src="images/cat.jpeg" alt="item1" />
            <Cardname>
              <Name>Cat</Name>
            </Cardname>
          </Card>
          <Card>
            <Img src="images/cat.jpeg" alt="item1" />
            <Cardname>
              <Name>Cat </Name>
            </Cardname>
          </Card>
          <Card>
            <Img src="images/cat.jpeg" alt="item1" />
            <Cardname>
              <Name>Cat </Name>
            </Cardname>
          </Card>
          <Card>
            <Img src="images/cat.jpeg" alt="item1" />
            <Cardname>
              <Name>Cat </Name>
            </Cardname>
          </Card>
          <Card>
            <Img src="images/cat.jpeg" alt="item1" />
            <Cardname>
              <Name>Cat </Name>
            </Cardname>
          </Card>
          <Card>
            <Img src="images/cat.jpeg" alt="item1" />
            <Cardname>
              <Name>Cat </Name>
            </Cardname>
          </Card>
          <Card>
            <Img src="images/cat.jpeg" alt="item1" />
            <Cardname>
              <Name>Cat </Name>
            </Cardname>
          </Card>
        </Scroll>
      </div>
      <div>
        <Title>
          <Item>Premium</Item>
          <Seemore onClick={() => router.push("/market-place/premium")}>
            See more
          </Seemore>
        </Title>
        <Scroll>
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
        </Scroll>
      </div>
    </Container>
  );
};

export default MarketPlace;

const Container = styled.div`
  height: calc(100vh - 100px);
  overflow-x: overlay;
`;

const Title = styled.div`
  width: 100%;
  height: fit-content;
  padding: 35px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Item = styled.div`
  color: #f8d49e;
  font-size: 50px;
  line-height: 90%;
  float: left;
`;

const Scroll = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  width: 100%;
  display: flex;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    outline: none;
    border-radius: 10px;
    border: 4px solid transparent;
    box-shadow: inset 6px 6px 0 rgba(34, 34, 34, 0.15);
  }
  ::-webkit-scrollbar-thumb:hover {
    border: 4px solid transparent;
    box-shadow: inset 6px 6px 0 rgba(34, 34, 34, 0.3);
  }
  ::-webkit-scrollbar-track {
    box-shadow: none;
    background-color: transparent;
  }
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
  margin-bottom: 5px;
`;

const Price = styled.p`
  color: #ffeed6;
  font-size: 30px;
  margin-top: 5px;
  margin-bottom: 20px;
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

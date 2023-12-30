"use client";

import colors from "@/styles/color";
import { styled } from "styled-components";
import { usePathname, useRouter } from "next/navigation";

const MarketPlaceFree = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
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
          <Title style={{ marginTop: "0px" }}>
            <Item>Character</Item>
          </Title>
          <MyCharacter style={{ marginLeft: "40px" }}>
            <Character>
              <CharacterImg src="/images/cat.jpeg" alt="item1" />
              <Name>Cat </Name>
              <Price>Free </Price>
            </Character>
            <Character>
              <CharacterImg src="/images/cat.jpeg" alt="item1" />
              <Name>Cat </Name>
              <Price>Free </Price>
            </Character>
            <Character>
              <CharacterImg src="/images/cat.jpeg" alt="item1" />
              <Name>Cat </Name>
              <Price>Free </Price>
            </Character>
            <Character>
              <CharacterImg src="/images/cat.jpeg" alt="item1" />
              <Name>Cat </Name>
              <Price>Free </Price>
            </Character>
            <Character>
              <CharacterImg src="/images/cat.jpeg" alt="item1" />
              <Name>Cat </Name>
              <Price>Free </Price>
            </Character>
          </MyCharacter>
        </MyCharacterContainer>

        <MyClothesContainer>
          <Title style={{ marginTop: "0px" }}>
            <Item>Clothes</Item>
          </Title>
          <MyClothes style={{ marginLeft: "40px" }}>
            <Clothes>
              <ClothesImg src="/images/cat.jpeg" alt="item1" />
              <Name>Cat </Name>
              <Price>Free </Price>
            </Clothes>
            <Clothes>
              <ClothesImg src="/images/cat.jpeg" alt="item1" />
              <Name>Cat </Name>
              <Price>Free </Price>
            </Clothes>
            <Clothes>
              <ClothesImg src="/images/cat.jpeg" alt="item1" />
              <Name>Cat </Name>
              <Price>Free </Price>
            </Clothes>
            <Clothes>
              <ClothesImg src="/images/cat.jpeg" alt="item1" />
              <Name>Cat </Name>
              <Price>Free </Price>
            </Clothes>
            <Clothes>
              <ClothesImg src="/images/cat.jpeg" alt="item1" />
              <Name>Cat </Name>
              <Price>Free </Price>
            </Clothes>
            <Clothes>
              <ClothesImg src="/images/cat.jpeg" alt="item1" />
              <Name>Cat </Name>
              <Price>Free </Price>
            </Clothes>
          </MyClothes>
        </MyClothesContainer>
      </MyProperty>
    </Container>
  );
};

export default MarketPlaceFree;

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
  flex-direction: row;
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

const CharacterImg = styled.img`
  width: 190px;
  height: 255px;
  border-radius: 18px;
  margin-top: 19px;
`;

const ClothesImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 18px;
  margin-top: 19px;
`;

const Name = styled.p`
  color: #ffffff;
  font-size: 30px;
  margin-top: 19px;
  margin-bottom: 10px;
`;

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

const Price = styled.p`
  color: #ffeed6;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 25px;
`;

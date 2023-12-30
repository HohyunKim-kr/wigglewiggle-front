"use client";

import { styled } from "styled-components";
import { usePathname, useRouter } from "next/navigation";

const My = () => {
  const router = useRouter();

  return (
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
        <Profile>
          <ProfileImg src="images/cat.jpeg" alt="item1" />
          <Name>Cat </Name>
          <Wallet>0x123456789123456</Wallet>
          <MyMoney>0000$</MyMoney>
        </Profile>
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
        </MyCharacterContainer>

        <MyClothesContainer>
          <Title style={{ paddingTop: "0px" }}>
            <Item>My Clothes</Item>
            <Seemore onClick={() => router.push("/my/my-clothes")}>
              See more
            </Seemore>
          </Title>
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
        </MyClothesContainer>
      </MyProperty>
    </Container>
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

const Profile = styled.div`
  border-radius: 18px;
  background: #292929;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  width: fit-content;
  height: fit-content;
  margin-bottom: 25px;
  margin-left: 50px;
`;

const ProfileImg = styled.img`
  width: 264px;
  height: 340px;
  border-radius: 18px;
  margin-top: 19px;
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

const Wallet = styled.p`
  color: #b1b1b1;
  font-size: 15px;
  margin-top: 10px;
`;

const MyMoney = styled.p`
  color: #ffeed6;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 25px;
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

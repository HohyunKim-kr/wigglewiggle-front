"use client";

import { styled } from "styled-components";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import PremiumCharacterModal from "@/components/modal/my-modal/my-character-modal/PremiumCharacterModal";
import PremiumClothesModal from "@/components/modal/my-modal/my-clothes-modal/PremiumClothesModal";
import FreeCharacterModal from "@/components/modal/my-modal/my-character-modal/FreeCharacterModal";
import FreeClothesModal from "@/components/modal/my-modal/my-clothes-modal/FreeClothesModal";
import RewardModal from "@/components/modal/reward-modal";

import CharacterBlock from "@/components/FreeCharacterBlock";
import ClothesBlock from "@/components/FreeClothesBlock";
import ProfileBlock from "@/components/ProfileBlock";
import RewardBlock from "@/components/RewardBlock";
import EggDropBlock from "@/components/EggDropBlock";

import { useSelector } from "react-redux";
import { getAddressState, getNicknameState } from "@/redux/slice/authSlice";
import { AlchemyProvider, parseEther, parseUnits } from "ethers";

const My = () => {
  const router = useRouter();
  const [openedModal, setOpenedModal] = useState("");
  const userNickname: string | null = useSelector(getNicknameState);
  const userAddress: string | null = useSelector(getAddressState);
  const [userBalance, setUserBalance] = useState(0);
  const [redEggAmount, setRedEggAmout] = useState(0);

  const provider = new AlchemyProvider(
    "maticmum",
    process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
  );

  useEffect(() => {
    async function getUserBalance() {
      const balance = await provider.getBalance(userAddress!);
      setUserBalance(Number(balance));
    }
    getUserBalance();
  }, []);

  return (
    <>
      {openedModal === "reward" && (
        <RewardModal
          imgSrc={"/rewardImg/reward-red.png"}
          name={"Red"}
          onClose={() => setOpenedModal("")}
        />
      )}

      {openedModal === "freeCharacter" && (
        <FreeCharacterModal
          imgSrc={"/images/free_character.png"}
          name={"Free Wiggle"}
          address={""}
          price={"Free"}
          onClose={() => setOpenedModal("")}
        />
      )}
      {openedModal === "freeClothes" && (
        <FreeClothesModal
          imgSrc={"/images/FlowerPot.png"}
          name={"Flower Pot"}
          tokenId={"3"}
          price={"Free"}
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
            imgSrc={"images/free_character.png"}
            name={userNickname!}
            wallet={userAddress!}
            myMoney={userBalance / 10 ** 18 + " Matic"}
          />
        </MyProfile>

        <MyProperty>
          <MyRewardContainer>
            <Item style={{ padding: "25px", margin: "0", marginLeft: "45px" }}>
              My Rewards
            </Item>
            <MyReward style={{ marginLeft: "40px" }}>
              <EggDropBlock
                onClickHandler={() => {
                  setOpenedModal("reward");
                  setRedEggAmout(redEggAmount + 1);
                }}
              />
              <RewardBlock
                imgSrc={"/rewardImg/reward-red.png"}
                number={redEggAmount.toString()}
              />
              <RewardBlock
                imgSrc={"/rewardImg/reward-orange.png"}
                number={"0"}
              />
              <RewardBlock
                imgSrc={"/rewardImg/reward-yellow.png"}
                number={"0"}
              />
              <RewardBlock
                imgSrc={"/rewardImg/reward-green.png"}
                number={"0"}
              />
              <RewardBlock imgSrc={"/rewardImg/reward-blue.png"} number={"0"} />
              <RewardBlock imgSrc={"/rewardImg/reward-navy.png"} number={"0"} />
              <RewardBlock
                imgSrc={"/rewardImg/reward-purple.png"}
                number={"0"}
              />
            </MyReward>
          </MyRewardContainer>
          <MyCharacterContainer>
            <Title style={{ marginTop: "0px" }}>
              <Item>My Character</Item>
              <Seemore onClick={() => router.push("/my/my-character")}>
                See more
              </Seemore>
            </Title>
            <MyCharacter style={{ marginLeft: "40px" }}>
              <CharacterBlock
                imgSrc={"/images/free_character.png"}
                name={"Free Wiggle"}
                price={"free"}
                onClickHandler={() => setOpenedModal("freeCharacter")}
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
                imgSrc={"/images/FlowerPot.png"}
                name={"Flower Pot"}
                price={"Free"}
                onClickHandler={() => setOpenedModal("freeClothes")}
              />

              {/* <ClothesBlock
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
              /> */}
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
const MyRewardContainer = styled.div`
  width: auto;
  height: auto;
`;

const MyReward = styled.div`
  padding-left: 40px;
`;
const MyCharacter = styled.div``;
const MyClothes = styled.div`
  padding-left: 40px;
`;

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

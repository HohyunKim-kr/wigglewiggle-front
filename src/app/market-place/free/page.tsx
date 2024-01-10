"use client";

import colors from "@/styles/color";
import { styled } from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

import FreeClothesModal from "@/components/modal/market-place-modal/clothes-modal/FreeClothesModal";
import FreeClothesBlock from "@/components/FreeClothesBlock";
import freeClothingList from "../../../lib/freeClothing.json";

import { AlchemyProvider, ethers } from "ethers";
import { wiggleFreeClothingAddress } from "@/lib/contractAddresses";
import WiggleFreeClothingABI from "../../../abis/WiggleFreeClothing.json";
import { useSelector } from "react-redux";
import { getAddressState } from "@/redux/slice/authSlice";
import InProgressModal from "@/components/modal/InprogressModal";
import Image from "next/image";
import SuccessModal from "@/components/modal/SuccessModal";

type IFreeClothing = {
  name: string;
  URI: string;
};

const initialFreeClothing = {
  name: "",
  URI: "",
};

const MarketPlaceFree = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [openedModal, setOpenedModal] = useState("");
  const [freeClothing, setFreeClothing] =
    useState<IFreeClothing>(initialFreeClothing);

  const userAddress: string | null = useSelector(getAddressState);

  const provider = new AlchemyProvider(
    "maticmum",
    process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
  );
  const signer = new ethers.Wallet( //contract 소유자가 직접 트랜잭션을 보내야함.
    process.env.NEXT_PUBLIC_PRIVATE_KEY!,
    provider
  );

  let wiggleFreeClothingContract = new ethers.Contract(
    wiggleFreeClothingAddress,
    WiggleFreeClothingABI,
    signer
  );

  async function buyFreeClothing(URI: string) {
    const mintFreeClothing = await wiggleFreeClothingContract.safeMint(
      userAddress,
      URI
    );
    const receiptMintFreeClothing = await mintFreeClothing.wait();
    console.log(receiptMintFreeClothing);
    setOpenedModal("success");
  }

  return (
    <>
      {openedModal === "buy" && (
        <FreeClothesModal
          URI={freeClothing.URI}
          name={freeClothing.name}
          tokenId={""}
          price={"Free"}
          onClose={() => setOpenedModal("")}
          purchaseButtonHandler={async () => {
            setOpenedModal("inProgress");
            await buyFreeClothing(freeClothing.URI);
          }}
        />
      )}
      {openedModal === "inProgress" && (
        <InProgressModal>
          <ModalImage
            src={"https://ipfs.io/ipfs/" + freeClothing.URI}
            alt="free clothing"
            width={130}
            height={130}
          />
          <InProgressModalMessage>Buying Clothing...</InProgressModalMessage>
        </InProgressModal>
      )}
      {openedModal === "success" && (
        <SuccessModal
          onClose={() => setOpenedModal("")}
          OKButtonHandler={() => setOpenedModal("")}
        >
          <ModalImage
            src={"https://ipfs.io/ipfs/" + freeClothing.URI}
            alt="free clothing"
            width={130}
            height={130}
          />
          <SuccessModalMessage>
            {"You've successfully bought the clothing!"}
          </SuccessModalMessage>
        </SuccessModal>
      )}

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
          <MyClothesContainer>
            <Title>Clothings</Title>
            <MyClothes>
              {freeClothingList.map((freeClothing, index) => (
                <FreeClothesBlock
                  imgSrc={"https://ipfs.io/ipfs/" + freeClothing.URI}
                  name={freeClothing.name}
                  price="Free"
                  onClickHandler={() => {
                    setOpenedModal("buy");
                    setFreeClothing(freeClothing);
                  }}
                  key={index}
                />
              ))}
            </MyClothes>
          </MyClothesContainer>
        </MyProperty>
      </Container>
    </>
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
  padding: 0px 80px;
`;
const MyClothesContainer = styled.div`
  width: auto;
  height: auto;
`;

const MyClothes = styled.div`
  margin-top: 20px;
`;

const Title = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  color: #d3d3d3;
  font-size: 40px;
`;

const Item = styled.div`
  color: #d3d3d3;
  font-size: 37px;
  line-height: 90%;
  margin-bottom: 25px;
  margin-left: 35px;
`;

const ModalImage = styled(Image)`
  margin-bottom: 20px;
`;

const SuccessModalMessage = styled.div`
  font-size: 25px;
`;

const InProgressModalMessage = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
`;

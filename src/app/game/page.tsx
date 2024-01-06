"use client";
import { AlchemyProvider, ethers } from "ethers";
import { styled } from "styled-components";
import WiggleFreeABI from "../../abis/WiggleFree.json";
import ERC6551RegistryABI from "../../abis/ERC6551Registry.json";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddressState } from "@/redux/slice/authSlice";
import YellowLongButton from "@/components/YellowLongButton";
import { getNFTMetadata } from "@/lib/alchemy";
import WiggleGame from "@/components/game/Game";

const wiggleFreeAddress = "0xa02a9dc228cB4028140eF799E4111b4281aDEB10";
const registryAddress = "0x02101dfB77FDE026414827Fdc604ddAF224F0921";
const implementationAddress = "0x2d25602551487c3f3354dd80d76d54383a243358"; //token bound org의 v2에 나와있음
const salt = 0;

const Game = () => {
  const provider = new AlchemyProvider(
    "maticmum",
    process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
  );
  const signer = new ethers.Wallet( //contract 소유자가 직접 트랜잭션을 보내야함.
    process.env.NEXT_PUBLIC_PRIVATE_KEY!,
    provider
  );

  const userAddress: string | null = useSelector(getAddressState);

  let wiggleFreeContract = new ethers.Contract(
    wiggleFreeAddress,
    WiggleFreeABI,
    signer
  );

  const RegistryContract = new ethers.Contract(
    registryAddress,
    ERC6551RegistryABI,
    signer
  );

  const [isFreeCharacterExist, setIsFreeCharacterExist] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const checkFreeCharacterExistence = async () => {
    wiggleFreeContract.connect(signer);
    // 사용자가 기본 캐릭터를 민팅받았는지 확인하는 함수
    const userList = await wiggleFreeContract.getUserList();
    for (let i = 0; i < userList.length; i++) {
      if (userAddress === userList[i]) {
        setIsFreeCharacterExist(true);

        const tokenID = Number(
          await wiggleFreeContract.getTokenIdByAddress(userAddress)
        );
        const tokenBoundAccount = await RegistryContract.account(
          implementationAddress,
          "0x13881",
          wiggleFreeAddress,
          tokenID,
          salt
        );
        console.log("Token Bound Account", tokenBoundAccount);

        const gatewayURL = (
          await getNFTMetadata(
            wiggleFreeAddress, //  World of Women NFT contract address: Replace with your own NFT contract address
            tokenID.toString() // Replace with the token id you want to get the metadata of
          )
        ).tokenUri?.slice(0, -1); //마지막에 0이 붙어서 나와서 이를 잘라주어야 함.
        console.log(gatewayURL);

        if (gatewayURL) {
          setImageURL(gatewayURL);
        }

        break;
      }
      setIsFreeCharacterExist(false);
    }
  };

  const createFreeCharacter = async () => {
    //기본 캐릭터를 생성하는 함수
    await wiggleFreeContract.connect(signer);
    const mintNFT = await wiggleFreeContract.safeMint(userAddress);
    const receiptMintNFT = await mintNFT.wait();
    if (receiptMintNFT.status === 1) {
      //성공
      setIsFreeCharacterExist(true);
      console.log(mintNFT);
      const tokenID = Number(
        await wiggleFreeContract.getTokenIdByAddress(userAddress)
      );
      const initData = "0x";
      console.log(RegistryContract);

      const createAccount = await RegistryContract.createAccount(
        implementationAddress,
        "0x13881",
        wiggleFreeAddress,
        tokenID,
        salt,
        initData
      );
      const receiptCreateAccount = await createAccount.wait();
      console.log(receiptCreateAccount);
      if (receiptCreateAccount.status === 1) {
        console.log(
          `createAccount call successful. Tx Hash: ${receiptCreateAccount.hash}`
        );
      }
      const tokenBoundAccount = await RegistryContract.account(
        implementationAddress,
        "0x13881",
        wiggleFreeAddress,
        tokenID,
        salt
      );
      console.log("Token Bound Account", tokenBoundAccount);
    }
  };

  useEffect(() => {
    checkFreeCharacterExistence();
  }, []);

  return (
    <Container>
      {isFreeCharacterExist ? (
        <div>
          {/* <img src={imageURL} /> */}
          <WiggleGame />
        </div>
      ) : (
        <ButtonWrapper>
          <YellowLongButton
            text={"Create Free Character"}
            onClickHandler={() => {
              createFreeCharacter();
            }}
          />
        </ButtonWrapper>
      )}
    </Container>
  );
};

export default Game;

const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  height: 70px;
`;

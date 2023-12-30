"use client";
import { AlchemyProvider, ethers } from "ethers";
import { styled } from "styled-components";
import ABI from "../../abis/WiggleFree.json";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddressState } from "@/redux/slice/authSlice";
import YellowLongButton from "@/components/YellowLongButton";
import { getNFTMetadata } from "@/lib/alchemy";

const wiggleFreeAddress = "0xb275ba3BC567A8fbC4F812Fd39098A58952Fb887";

const Game = () => {
  const provider = new AlchemyProvider(
    "maticmum",
    process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
  );
  const signer = new ethers.Wallet( //contract 소유자가 직접 트랜잭션을 보내야함.
    process.env.NEXT_PUBLIC_PRIVATE_KEY!,
    provider
  );

  const userAddress = useSelector(getAddressState);

  let wiggleFreeContract = new ethers.Contract(wiggleFreeAddress, ABI, signer);

  const [isFreeCharacterExist, setIsFreeCharacterExist] = useState(false);
  const [imageURL, setImageURL] = useState("");

  // //Alchemy SDK
  // // Configuring Alchemy SDK with your API key and network
  // const settings = {
  //   apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
  //   network: Network.MATIC_MUMBAI, // Replace with the network your NFT is on.
  // };

  // // Creating an Alchemy instance to make calls to the Alchemy API
  // const alchemy = new Alchemy(settings);

  // // Function to get the metadata of an NFT: accepts the NFT contract address and the token ID to get the metadata of
  // async function getNFTMetadata(nftContractAddress: string, tokenId: string) {
  //   // Making a call to the Alchemy API to get the metadata
  //   const response = await alchemy.nft.getNftMetadata(
  //     nftContractAddress,
  //     tokenId
  //   );
  //   return response; // returning the metadata
  // }

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
    const mintNFT = await wiggleFreeContract.safeMint(userAddress);
    const receiptMintNFT = await mintNFT.wait();
    if (receiptMintNFT.status === 1) {
      //성공
      console.log(receiptMintNFT.hash);
      setIsFreeCharacterExist(true);
    }
  };

  useEffect(() => {
    checkFreeCharacterExistence();
  }, []);

  return (
    <Container>
      {isFreeCharacterExist ? (
        <div>
          <img src={imageURL} />
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

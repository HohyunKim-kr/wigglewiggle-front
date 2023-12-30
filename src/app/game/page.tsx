"use client";
import { AlchemyProvider, ethers } from "ethers";
import { styled } from "styled-components";
import ABI from "../../abis/WiggleFree.json";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviderState, getSignerState } from "@/redux/slice/web3Slice";
import { getAddressState } from "@/redux/slice/authSlice";
import YellowLongButton from "@/components/YellowLongButton";
import { useWeb3Auth } from "@/context/Web3AuthContext";

const wiggleFreeAddress = "0x3d9E329f07eA03e792aA07B0025da568D4e608C4";

const Game = () => {
  const provider = new AlchemyProvider(
    "maticmum",
    process.env.NEXT_PUBLIC_API_KEY
  );
  const signer = new ethers.Wallet( //contract 소유자가 직접 트랜잭션을 보내야함.
    process.env.NEXT_PUBLIC_PRIVATE_KEY!,
    provider
  );

  const userAddress = useSelector(getAddressState);

  let wiggleFreeContract = new ethers.Contract(wiggleFreeAddress, ABI, signer);

  const [isFreeCharacterExist, setIsFreeCharacterExist] = useState(false);

  const checkFreeCharacterExistence = async () => {
    wiggleFreeContract.connect(signer);
    // 사용자가 기본 캐릭터를 민팅받았는지 확인하는 함수
    const userList = await wiggleFreeContract.getUserList();
    for (let i = 0; i < userList.length; i++) {
      if (userAddress === userList[i]) {
        setIsFreeCharacterExist(true);
        const tokenID = await wiggleFreeContract.getTokenIdByAddress(
          userAddress
        );
        console.log(Number(tokenID));
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
        <div></div>
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

"use client";
import { ethers } from "ethers";
import { styled } from "styled-components";
import ABI from "../../abis/WiggleFree.json";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviderState, getSignerState } from "@/redux/slice/web3Slice";
import { getAddressState } from "@/redux/slice/authSlice";
import YellowLongButton from "@/components/YellowLongButton";

const wiggleFreeAddress = "0x56a7753bd4b1DD1715Ef428AaDD8d4494ad0b0a8";

const Game = () => {
  const provider = useSelector(getProviderState);
  const signer = new ethers.Wallet( //contract 소유자가 직접 트랜잭션을 보내야함.
    process.env.NEXT_PUBLIC_PRIVATE_KEY!,
    provider
  );

  const userAddress = useSelector(getAddressState);
  // userAddress.toUpperCase();
  const wiggleFreeContract = new ethers.Contract(
    wiggleFreeAddress,
    ABI,
    provider
  );

  const wiggleFreeContract1 = new ethers.Contract(
    wiggleFreeAddress,
    ABI,
    signer
  );

  const [isFreeCharacterExist, setIsFreeCharacterExist] = useState(false);

  const checkFreeCharacterExistence = async () => {
    // 사용자가 기본 캐릭터를 민팅받았는지 확인하는 함수
    const userList = await wiggleFreeContract.getUserList();
    for (let i = 0; i < userList.length; i++) {
      if (userAddress === userList[i]) {
        setIsFreeCharacterExist(true);
        break;
      }
      setIsFreeCharacterExist(false);
    }
  };

  const createFreeCharacter = async () => {
    //기본 캐릭터를 생성하는 함수

    // userAddress = ethers.getAddress(userAddress);
    const mintNFT = await wiggleFreeContract1.safeMint(userAddress);
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

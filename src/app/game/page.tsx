"use client";
import { AlchemyProvider, Contract, ethers } from "ethers";
import { styled } from "styled-components";
import ABI from "../../abis/WiggleFree.json";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviderState, getSignerState } from "@/redux/slice/web3Slice";

const wiggleFreeAddress = "0x56a7753bd4b1DD1715Ef428AaDD8d4494ad0b0a8";

const Game = () => {
  const signer = useSelector(getSignerState);
  const provider = useSelector(getProviderState);
  console.log(provider);
  const wiggleFreeContract = new ethers.Contract(
    wiggleFreeAddress,
    ABI,
    provider
  );

  const somefunction = async () => {
    const transaction_getUserList = await wiggleFreeContract.getUserList();
    console.log(transaction_getUserList);
  };

  somefunction();

  return <Container></Container>;
};

export default Game;

const Container = styled.div`
  height: calc(100vh - 100px);
`;

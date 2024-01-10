"use client";
import PaintBoard from "@/components/paintBoard/PaintBoard";
import { styled } from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import colors from "@/styles/color";
import YellowShortButton from "@/components/YellowShortButton";
import SellThisClothing from "@/components/modal/sell-this-clothing";
import uploadFileToIPFS from "@/lib/uploadFileToIPFS";
import { AlchemyProvider, ethers } from "ethers";
import WiggleClothingABI from "../../abis/WiggleClothing.json";
import { useWeb3Auth } from "@/context/Web3AuthContext";
import { useSelector } from "react-redux";
import { getAddressState } from "@/redux/slice/authSlice";
import SuccessModal from "@/components/modal/SuccessModal";
import InProgressModal from "@/components/modal/InprogressModal";
import {
  contractOwnerAddress,
  wiggleClothingAddress,
} from "@/lib/contractAddresses";

const Editor = () => {
  const [canvasImageUrl, setCanvasImageUrl] = useState("");
  const [isCharacterDressedUp, setIsCharacterDressedUp] = useState(false);
  const [openedModal, setOpenedModal] = useState("");
  const [isCreationConfirmed, setIsCreationConfirmed] = useState(false);
  const [clothingName, setClothingName] = useState("");
  const [clothingPrice, setClothingPrice] = useState(0);
  const web3auth = useWeb3Auth();

  const userAddress: string | null = useSelector(getAddressState);

  const tokenMintedABI = WiggleClothingABI.find(
    (item) => item.name === "TokenMinted" && item.type === "event"
  );

  const provider = new AlchemyProvider(
    "maticmum",
    process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
  );

  const contractOwner = new ethers.Wallet( //contract 소유자가 직접 트랜잭션을 보내야함.
    process.env.NEXT_PUBLIC_PRIVATE_KEY!,
    provider
  );

  let wiggleClothingContract = new ethers.Contract(
    wiggleClothingAddress,
    WiggleClothingABI,
    contractOwner
  );

  useEffect(() => {
    async function createClothing() {
      // Clothing NFT mint
      const mintClothing = await wiggleClothingContract.safeMint(
        contractOwnerAddress
      );
      const receiptMintClothing = await mintClothing.wait();
      const ITokenMinted = new ethers.Interface([tokenMintedABI!]);
      const tokenId = Number(
        ITokenMinted.parseLog(receiptMintClothing.logs[1])?.args[1]
      );

      // clothing URI IPFS 등록
      const ipfsHash = await uploadFileToIPFS(canvasImageUrl);
      console.log(ipfsHash);

      // Clothing 정보 등록
      const setClothingURI = await wiggleClothingContract.setTokenURI(
        tokenId,
        ipfsHash
      );
      const receiptSetClothingURI = await setClothingURI.wait();
      console.log(receiptSetClothingURI);

      const privateKey = await web3auth!.provider!.request({
        method: "private_key",
      });
      const userWallet = new ethers.Wallet(privateKey as string, provider);
      const userConnectedWiggleClothingContract = new ethers.Contract(
        wiggleClothingAddress,
        WiggleClothingABI,
        userWallet
      );
      const options = { value: ethers.parseEther("0.1") };
      const registerClothingInfo =
        await userConnectedWiggleClothingContract.registerClothingInfo(
          userAddress,
          ipfsHash,
          clothingName,
          clothingPrice,
          tokenId,
          options
        );
      const receiptRegisterClothingInfo = await registerClothingInfo.wait();
      console.log(receiptRegisterClothingInfo);
      setOpenedModal("success");
    }

    if (isCreationConfirmed) {
      console.log(clothingName, clothingPrice);
      setOpenedModal("inProgress");
      createClothing();
      setClothingName("");
      setClothingPrice(0);
      setCanvasImageUrl("");
    }
  }, [isCreationConfirmed]);

  return (
    <>
      {openedModal === "sell" && (
        <SellThisClothing
          onClose={() => setOpenedModal("")}
          clothingName={clothingName}
          setClothingName={setClothingName}
          clothingPrice={clothingPrice}
          setClothingPrice={setClothingPrice}
          setIsCreationConfirmed={setIsCreationConfirmed}
        />
      )}
      {openedModal === "inProgress" && (
        <InProgressModal>
          <ClothesGrade>A</ClothesGrade>
          <InProgressModalMessage>Creating clothing...</InProgressModalMessage>
        </InProgressModal>
      )}
      {openedModal === "success" && (
        <SuccessModal
          onClose={() => setOpenedModal("")}
          OKButtonHandler={() => setOpenedModal("")}
        >
          <ClothesGrade>A</ClothesGrade>
          <SuccessModalMessage>Clothing has been created!</SuccessModalMessage>
        </SuccessModal>
      )}

      <Container>
        <TopWrapper>You can create clothes for Wiggles here.</TopWrapper>
        <BottomWrapper>
          <PaintBoardWrapper>
            <PaintBoard
              isCharacterDressedUp={isCharacterDressedUp}
              setIsCharacterDressedUp={setIsCharacterDressedUp}
              setCanvasImageUrl={setCanvasImageUrl}
              openedModal={openedModal}
            />
          </PaintBoardWrapper>
          <ArrowImageWrapper onClick={() => setIsCharacterDressedUp(true)}>
            <Image src="/arrow.png" alt="arrow" width={200} height={200} />
            <ArrowImageText>Dress up a character</ArrowImageText>
          </ArrowImageWrapper>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <MergedImageWrapper>
              <BackgroundImage
                src="/images/free_character.png"
                alt="free character"
                width={500}
                height={500}
              />
              {canvasImageUrl !== "" && (
                <MergedImage
                  src={canvasImageUrl}
                  alt="merged image"
                  width={500}
                  height={500}
                />
              )}
            </MergedImageWrapper>
            {canvasImageUrl !== "" && (
              <YellowShortButton
                text="Sell this clothing"
                fontSize="30px"
                onClickHandler={() => setOpenedModal("sell")}
              />
            )}
          </div>
        </BottomWrapper>
      </Container>
    </>
  );
};

export default Editor;

const Container = styled.div`
  height: calc(100vh - 100px);

  padding: 30px 50px;
`;

const TopWrapper = styled.div`
  width: 100%;
  color: ${colors.white};
  font-size: 40px;
  font-weight: 500;

  /* border: 1px solid white; */
`;

const BottomWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid white; */
`;
const PaintBoardWrapper = styled.div`
  width: 500px;
`;

const ArrowImageWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  /* border: 1px solid white; */
  cursor: pointer;
`;

const ArrowImageText = styled.div`
  color: black;
  position: absolute;

  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);

  font-size: 18px;
  font-weight: 700;
  line-height: 130%;
`;

const MergedImageWrapper = styled.div`
  width: 500px;
  height: 500px;
  /* background-color: white; */
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled(Image)`
  width: 500px;
  height: 500px;

  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const MergedImage = styled(Image)`
  width: 500px;
  height: 500px;

  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
const ClothesGrade = styled.div`
  font-size: 100px;
  font-weight: 600;
  color: red;
  margin-bottom: 10px;
`;

const SuccessModalMessage = styled.div`
  font-size: 25px;
`;

const InProgressModalMessage = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
`;

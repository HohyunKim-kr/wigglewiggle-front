"use client";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import colors from "@/styles/color";

interface ModalProps {
  onClose: () => void;
}

type Props = {
  imgSrc: string;
  name: string;
  address: string;
  price: string;
};

const FreeCharacterModal = ({
  onClose,
  imgSrc,
  name,
  address,
  price,
}: ModalProps & Props) => {
  const [isSeeClothes, setIsSeeClothes] = useState(false);

  return (
    <>
      <ModalOverlay>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "flex" }}>
            <CloseButton onClick={onClose}>X</CloseButton>
          </div>
          <Inner>
            {isSeeClothes ? (
              <div>
                <SeeClothesTitle>See Clothings</SeeClothesTitle>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img src="/images/FlowerPot.png" width={180} height={180} />
                </div>
              </div>
            ) : (
              <>
                <CharacterImg src={imgSrc} alt={name} />
                <Information>
                  <Name>{name}</Name>
                  <Address>{address}</Address>
                  <Price>{price}</Price>
                  <SeeClothes onClick={() => setIsSeeClothes(true)}>
                    See Clothings
                  </SeeClothes>
                  <SellorSend>
                    <Sell>Sell</Sell>
                    <Send>Send</Send>
                  </SellorSend>
                </Information>
              </>
            )}
          </Inner>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default FreeCharacterModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: ${colors.white};
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  font-family: "ABeeZee";
  width: fit-content;
  height: fit-content;
  padding: 5px;
  background: none;
  border: none;
  font-size: 40px;
  color: ${colors.black};
  margin-left: auto;
  cursor: pointer;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
`;

const CharacterImg = styled.img`
  width: 190px;
  height: 255px;
  border-radius: 18px;
  margin: 20px;
  margin-top: 0;
`;

const Information = styled.div`
  margin: 20px;
  margin-top: 0;
`;
const Name = styled.p`
  color: ${colors.black};
  font-size: 35px;
  margin-top: 0;
  margin-bottom: 10px;
`;
const Address = styled.p`
  color: #726755;
  font-size: 10px;
  margin-top: 8px;
  margin-bottom: 15px;
`;
const Price = styled.p`
  color: #6b6b6b;
  font-size: 25px;
  margin-top: 35px;
  margin-bottom: 0px;
`;
const SeeClothes = styled.button`
  font-family: "ABeeZee";
  font-size: 33px;
  color: ${colors.black};
  height: fit-content;
  width: fit-content;
  border-radius: 18px;
  border-color: ${colors.primary};
  background: ${colors.primary};
  padding: 0 29px;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 10px;
`;
const SellorSend = styled.div`
  display: flex;
  flex-direction: row;
`;
const Sell = styled.button`
  font-family: "ABeeZee";
  font-size: 28px;
  color: ${colors.black};
  height: fit-content;
  width: fit-content;
  border-radius: 18px;
  border-color: ${colors.primary};
  background: ${colors.primary};
  padding: 0 30px;
  cursor: pointer;
`;
const Send = styled.button`
  font-family: "ABeeZee";
  font-size: 28px;
  color: ${colors.black};
  height: fit-content;
  width: fit-content;
  border-radius: 18px;
  border-color: ${colors.primary};
  background: ${colors.primary};
  padding: 0 30px;
  float: left;
  cursor: pointer;
`;

const SeeClothesTitle = styled.div`
  width: 100%;
  font-size: 50px;
  text-align: center;
`;

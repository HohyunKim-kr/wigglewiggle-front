import { styled } from "styled-components";
import React from "react";

interface TierProps {
  text: string;
}

type Props = {
  imgSrc: string;
  name: string;
  price: string;
  tier: string;
  onClickHandler: () => void;
};

const PremiumClothesBlock = ({
  imgSrc,
  name,
  price,
  tier,
  onClickHandler,
}: Props) => {
  return (
    <Clothes onClick={() => onClickHandler()}>
      <ClothesImg src={imgSrc} alt={name} />
      <Inner>
        <NamePrice>
          <Name>{name}</Name>
          <Price>{price}</Price>
        </NamePrice>
        <Tier text={tier}>{tier}</Tier>
      </Inner>
    </Clothes>
  );
};

export default PremiumClothesBlock;

const Clothes = styled.div`
  border-radius: 18px;
  background: #292929;
  padding: 0 19px;
  width: fit-content;
  height: fit-content;
  float: left;
  cursor: pointer;
`;

const ClothesImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 18px;
  margin-top: 19px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NamePrice = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  color: #ffffff;
  font-size: 30px;
  margin-top: 19px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  color: #ffeed6;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 25px;
`;

const Tier = styled.div<TierProps>`
  color: ${(props) => {
    return props.text === "A+"
      ? "#fac679"
      : props.text === "B+"
      ? "#afafaf"
      : "#92611d";
  }};
  font-size: 45px;
  margin-left: 20px;
`;

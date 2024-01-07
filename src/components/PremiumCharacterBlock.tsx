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

const PremiumCharacterBlock = ({
  imgSrc,
  name,
  price,
  tier,
  onClickHandler,
}: Props) => {
  return (
    <Character onClick={() => onClickHandler()}>
      <CharacterImg src={imgSrc} alt={name} />
      <Inner>
        <NamePrice>
          <Name>{name}</Name>
          <Price>{price}</Price>
        </NamePrice>
        <Tier text={tier}>{tier}</Tier>
      </Inner>
    </Character>
  );
};

export default PremiumCharacterBlock;

const Character = styled.div`
  border-radius: 18px;
  background: #292929;
  padding: 0 19px;
  width: fit-content;
  height: fit-content;
  margin-bottom: 25px;
  margin-left: 40px;
  float: left;
  cursor: pointer;
`;

const CharacterImg = styled.img`
  width: 190px;
  height: 255px;
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
  margin-top: 10px;
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
  font-size: 50px;
  margin-left: 40px;
`;

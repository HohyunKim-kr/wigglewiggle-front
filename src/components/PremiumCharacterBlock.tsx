import { styled } from "styled-components";
import React from "react";

interface TierProps {
  text: string;
}

type Props = {
  imgSrc: string;
  name: string;
  price: string;
  onClickHandler: () => void;
};

const PremiumCharacterBlock = ({
  imgSrc,
  name,
  price,
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
  float: left;
  cursor: pointer;
`;

const CharacterImg = styled.img`
  width: 220px;
  height: 220px;
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
  text-align: center;
`;

const Price = styled.p`
  color: #ffeed6;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 25px;
  text-align: center;
`;

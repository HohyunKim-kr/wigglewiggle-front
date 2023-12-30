import { styled } from "styled-components";

type Props = {
  imgSrc: string;
  name: string;
  price: string;
  onClickHandler: () => void;
};

const MarketCharacterBlock = ({
  imgSrc,
  name,
  price,
  onClickHandler,
}: Props) => {
  return (
    <Character onClick={() => onClickHandler()}>
      <CharacterImg src={imgSrc} alt={name} />
      <Name>{name}</Name>
      <Price>{price} </Price>
    </Character>
  );
};

export default MarketCharacterBlock;

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

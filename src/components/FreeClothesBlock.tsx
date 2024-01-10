import { styled } from "styled-components";

type Props = {
  imgSrc: string;
  name: string;
  price: string;
  onClickHandler: () => void;
};

const FreeClothesBlock = ({ imgSrc, name, price, onClickHandler }: Props) => {
  return (
    <Clothes onClick={() => onClickHandler()}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <ClothesImg src={imgSrc} alt={name} />
      </div>
      <Name>{name}</Name>
      <Price>{price} </Price>
    </Clothes>
  );
};

export default FreeClothesBlock;

const Clothes = styled.div`
  border-radius: 18px;
  background: #292929;
  padding: 0 19px;
  padding-top: 19px;
  width: fit-content;
  height: fit-content;
  margin-bottom: 25px;
  margin-right: 40px;
  float: left;
  cursor: pointer;
`;

const ClothesImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 18px;
`;

const Name = styled.p`
  color: #ffffff;
  font-size: 33px;
  margin-top: 25px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  color: #ffeed6;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 25px;
`;

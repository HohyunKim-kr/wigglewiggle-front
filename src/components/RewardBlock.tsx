import { styled } from "styled-components";

type Props = {
  imgSrc: string;
  number: number;
};

const FreeClothesBlock = ({ imgSrc, number }: Props) => {
  return (
    <Reward>
      <RewardImg src={imgSrc} alt="reward" />
      <Number>{number}</Number>
    </Reward>
  );
};

export default FreeClothesBlock;

const Reward = styled.div`
  border-radius: 18px;
  background: #292929;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  align-items: cneter;
  justify-content: center;
  text-align: center;

  width: fit-content;
  height: fit-content;
  margin-bottom: 25px;
  margin-right: 20px;
  float: left;
`;

const RewardImg = styled.img`
  width: 150px;
  height: 150px;
`;

const Number = styled.p`
  color: #ffffff;
  font-size: 33px;
  margin-top: 25px;
  margin-bottom: 10px;
`;

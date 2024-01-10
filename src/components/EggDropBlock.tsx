import { styled } from "styled-components";

type Props = {
  onClickHandler: () => void;
};

const EggDropBlock = ({ onClickHandler }: Props) => {
  return (
    <EggDrop
      onClick={() => {
        onClickHandler();
      }}
    >
      <EggDropImg src="/giftimg.png" />
      <EggDropContent>Egg Drop</EggDropContent>
    </EggDrop>
  );
};

export default EggDropBlock;

const EggDrop = styled.div`
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
  cursor: pointer;
`;

const EggDropImg = styled.img`
  width: 125px;
  height: 125px;
`;

const EggDropContent = styled.p`
  color: #ffffff;
  font-size: 28px;
  margin-top: 25px;
  margin-bottom: 10px;
`;

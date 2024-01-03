import colors from "@/styles/color";
import { styled } from "styled-components";

type Props = {
  imgSrc: string;
  name: string;
  wallet: string;
  myMoney: string;
};

const ProfileBlock = ({ imgSrc, name, wallet, myMoney }: Props) => {
  return (
    <Profile>
      <ProfileImg src={imgSrc} alt={name} />
      <Name>{name}</Name>
      <Wallet>{wallet}</Wallet>
      <MyMoney>{myMoney}</MyMoney>
    </Profile>
  );
};

export default ProfileBlock;

const Profile = styled.div`
  border-radius: 18px;
  background: #292929;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  width: fit-content;
  height: fit-content;
  margin-bottom: 25px;
  margin-left: 50px;
`;

const ProfileImg = styled.img`
  width: 264px;
  height: 340px;
  border-radius: 18px;
  margin-top: 19px;
`;

const Name = styled.p`
  color: #ffffff;
  font-size: 30px;
  margin-top: 19px;
  margin-bottom: 10px;
`;

const Wallet = styled.p`
  color: ${colors.white};
`;

const MyMoney = styled.p`
  color: #ffeed6;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 25px;
`;

import { CSSProperties, styled } from "styled-components";
import React from "react";

type Props = {
  rank: number;
  imgSrc: string;
  name: string;
  win: number;
  lose: number;
  reward: number;
};

const DashBoardBlock = ({ rank, imgSrc, name, win, lose, reward }: Props) => {
  return (
    <DashBoard>
      <Rank>{rank}</Rank>
      <Profile>
        <ProfileImg src={imgSrc} alt={name} />
        <Name>{name}</Name>
      </Profile>
      <Inner>
        <Win>{win}</Win>
        <Lose>{lose}</Lose>
        <Reward>{reward}</Reward>
      </Inner>
    </DashBoard>
  );
};

export default DashBoardBlock;

const DashBoard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background: #292929;
  border-radius: 25px;
  margin-bottom: 10px;
`;

const Rank = styled.div`
  width: 15%;
  font-size: 40px;
  color: #c7c7c7;
  text-align: center;
`;

const Profile = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 18px;
`;

const Name = styled.div`
  color: #ffffff;
  font-size: 30px;
`;

const Inner = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Win = styled.div`
  font-size: 30px;
  color: #ffeed6;
`;
const Lose = styled.div`
  font-size: 30px;
  color: #ffeed6;
`;
const Reward = styled.div`
  font-size: 30px;
  color: #ffeed6;
`;

import colors from "@/styles/color";
import { Dispatch, SetStateAction } from "react";
import { styled } from "styled-components";
import YellowShortButton from "./YellowShortButton";

type Props = {
  selectedCharacter: string;
  setSelectedCharacter: Dispatch<SetStateAction<string>>;
  selectedClothing: string;
  setSelectedClothing: Dispatch<SetStateAction<string>>;
  setIsCharClothSelected: Dispatch<SetStateAction<boolean>>;
};

const CharacterClothingSelect = ({
  selectedCharacter,
  setSelectedCharacter,
  selectedClothing,
  setSelectedClothing,
  setIsCharClothSelected,
}: Props) => {
  return (
    <Container>
      <Title>Select your character and clothing before game starts.</Title>
      <BottomWrapper>
        <CharacterWrapper>
          <SmallTitle>Character</SmallTitle>
          <CharClothingBlock
            imgSrc={"/images/free_character.png"}
            name={"Wiggle Free"}
            price={""}
            onClickHandler={() => {
              if (selectedCharacter === "wiggleFree") {
                setSelectedCharacter("");
              } else {
                setSelectedCharacter("wiggleFree");
              }
            }}
            $isClicked={selectedCharacter === "wiggleFree"}
          />
        </CharacterWrapper>

        <ClothingWrapper>
          <SmallTitle>Clothing</SmallTitle>
          <CharClothingBlock
            imgSrc={"/images/FlowerPot.png"}
            name={"FlowerPot"}
            price={""}
            onClickHandler={() => {
              if (selectedClothing === "flowerPot") {
                setSelectedClothing("");
              } else {
                setSelectedClothing("flowerPot");
              }
            }}
            $isClicked={selectedClothing === "flowerPot"}
          />
        </ClothingWrapper>
      </BottomWrapper>
      <YellowShortButton
        text="Game Start"
        margin="167px 0 0 0"
        onClickHandler={() => {
          if (selectedCharacter !== "" && selectedClothing !== "") {
            setIsCharClothSelected(true);
          }
        }}
      />
    </Container>
  );
};

export default CharacterClothingSelect;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 50px;
`;

const Title = styled.div`
  font-size: 60px;
  color: ${colors.white};
  text-align: center;
  margin-top: 20px;
`;

const BottomWrapper = styled.div`
  width: 100%;
  border: 1px solid whtie;
  display: flex;
  justify-content: space-between;
`;

const CharacterWrapper = styled.div`
  width: 48%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClothingWrapper = styled.div`
  width: 48%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SmallTitle = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 40px;
  color: #d3d3d3;
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
`;

type CharClothingBlockProps = {
  imgSrc: string;
  name: string;
  price: string;
  onClickHandler: () => void;
  $isClicked: boolean;
};

const CharClothingBlock = ({
  imgSrc,
  name,
  price,
  onClickHandler,
  $isClicked,
}: CharClothingBlockProps) => {
  return (
    <Character onClick={() => onClickHandler()} $isClicked={$isClicked}>
      <CharacterImg src={imgSrc} alt={name} />
      <Name>{name}</Name>
      <Price>{price} </Price>
    </Character>
  );
};

const Character = styled.div<{ $isClicked: boolean }>`
  border-radius: 18px;
  background: #292929;
  padding: 0 19px;
  width: fit-content;
  height: fit-content;
  margin-bottom: 25px;
  margin-left: 40px;
  float: left;
  cursor: pointer;
  border: ${(props) => props.$isClicked && `1px solid ${colors.primary}`};
`;

const CharacterImg = styled.img`
  width: 190px;
  height: 190px;
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

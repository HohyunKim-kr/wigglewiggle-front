import colors from "@/styles/color";
import { styled } from "styled-components";

type Props = {
  text: string;
  margin?: string;
  onClickHandler: () => void;
};

const YellowButton = ({ text, margin, onClickHandler }: Props) => {
  return (
    <Container $margin={margin} onClick={() => onClickHandler()}>
      {text}
    </Container>
  );
};

export default YellowButton;

const Container = styled.div<{ $margin?: string }>`
  width: 430px;
  height: 100px;
  border-radius: 25px;
  background: ${colors.primary};
  margin: ${(props) => props.$margin};
  cursor: pointer;

  color: ${colors.black};
  font-size: 45px;
  font-style: normal;
  line-height: 90%;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

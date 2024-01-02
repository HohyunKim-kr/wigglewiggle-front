import colors from "@/styles/color";
import { styled } from "styled-components";

type Props = {
  text: string;
  margin?: string;
  onClickHandler: () => void;
};

const YellowLongButton = ({ text, margin, onClickHandler }: Props) => {
  return (
    <Container $margin={margin} onClick={() => onClickHandler()}>
      {text}
    </Container>
  );
};

export default YellowLongButton;

const Container = styled.button<{ $margin?: string }>`
  :hover {
    background-color: ${colors.primaryHover};
  }
  padding: 16px 100px;
  font-size: 30px;

  font-family: ABeeZee;

  align-items: center;
  align-self: stretch;

  border-radius: 500px;
  background: ${colors.primary};
  margin: ${(props) => props.$margin};

  cursor: pointer;
`;

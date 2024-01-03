import colors from "@/styles/color";
import { styled } from "styled-components";

type Props = {
  text: string;
  margin?: string;
  fontSize?: string;
  onClickHandler: () => void;
};

const YellowShortButton = ({
  text,
  margin,
  fontSize,
  onClickHandler,
}: Props) => {
  return (
    <Container
      $margin={margin}
      $fontSize={fontSize ? fontSize : "45px"}
      onClick={() => onClickHandler()}
    >
      {text}
    </Container>
  );
};

export default YellowShortButton;

const Container = styled.div<{ $margin?: string; $fontSize: string }>`
  width: 430px;
  height: 100px;
  border-radius: 25px;
  background: ${colors.primary};
  margin: ${(props) => props.$margin};
  cursor: pointer;

  color: ${colors.black};
  font-size: ${(props) => props.$fontSize};
  font-style: normal;
  line-height: 90%;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

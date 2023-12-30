import colors from "@/styles/color";
import { usePathname, useRouter } from "next/navigation";
import { styled } from "styled-components";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Container>
      <Logo
        onClick={() => router.push("/")} //수정 필요
      >
        Wiggle Wiggle
      </Logo>
      <div style={{ display: "flex" }}>
        <Item
          style={{ marginRight: "100px" }}
          onClick={() => router.push("/game")}
          $isClicked={pathname === "/game"}
        >
          Game
        </Item>
        <Item
          style={{ marginRight: "100px" }}
          onClick={() => router.push("/editor")}
          $isClicked={pathname === "/editor"}
        >
          Editor
        </Item>
        <Item
          style={{ marginRight: "100px" }}
          onClick={() => router.push("/market-place")}
          $isClicked={pathname.startsWith("/market-place")}
        >
          Market Place
        </Item>
        <Item
          onClick={() => router.push("/my")}
          $isClicked={pathname === "/my"}
        >
          My
        </Item>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background: #101010;
  width: 100vw;
  height: 100px;

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 50px 0 50px;
`;

const Logo = styled.div`
  color: ${colors.white};
  font-family: Acme;
  font-size: 50px;
  line-height: 90%;
  cursor: pointer;
`;

const Item = styled.div<{ $isClicked: boolean }>`
  color: ${(props) => (props.$isClicked ? colors.primary : colors.white)};
  font-size: 45px;
  line-height: 90%;

  cursor: pointer;
`;

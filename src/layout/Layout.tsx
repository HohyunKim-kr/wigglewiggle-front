"use client";

import { ReactNode } from "react";
import { styled } from "styled-components";
import Header from "./Header";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const showHeader = () => {
    if (pathname == "/") {
      return false;
    }
    return true;
  };
  return (
    <>
      {showHeader() && <Header />}
      <BodyContainer $top={showHeader() ? "100px" : "none"}>
        {children}
      </BodyContainer>
    </>
  );
};

const BodyContainer = styled.div<{ $top: string }>`
  background-color: #313131;
  width: 100vw;
  height: 100%;

  padding-top: ${(props) => props.$top};

  overflow: auto;
`;

export default Layout;

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
      <BodyContainer>{children}</BodyContainer>
    </>
  );
};

const BodyContainer = styled.div`
  background-color: #5e5d5d;
  width: 100vw;
  height: 100vh;

  overflow: auto;
`;

export default Layout;

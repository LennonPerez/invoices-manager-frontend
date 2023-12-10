"use client";

import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import Navbar from "@/layout/Navbar";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children }) => {
  return (
    <DefaultLayoutWrapper>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">{children}</div>
    </DefaultLayoutWrapper>
  );
};

const DefaultLayoutWrapper = styled.div`
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .content {
    padding-top: 4.5rem;

    @media (min-width: 768px) {
      padding-top: 5rem;
    }
  }
`;

export default DefaultLayout;

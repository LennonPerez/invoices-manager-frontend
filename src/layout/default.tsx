"use client";

import Navbar from "@/components/navbar";
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

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
  padding: 2.25rem 1.5rem;

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .content {
    padding-top: 4.5rem;
  }
`;

export default DefaultLayout;

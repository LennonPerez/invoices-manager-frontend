/* eslint-disable react-hooks/exhaustive-deps */
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface BaseSelectorProps {
  children: ReactNode;
}

const BaseSelector: FunctionComponent<BaseSelectorProps> = ({ children }) => {
  return <BaseSelectorStyles>{children}</BaseSelectorStyles>;
};

const BaseSelectorStyles = styled.div`
  background-color: ${({ theme }) => theme.selector.background};
  box-shadow: 0px 10px 20px 0px ${({ theme }) => theme.selector.shadow};
  border-radius: 0.75rem;
  position: relative;
  z-index: 3;
`;

export default BaseSelector;

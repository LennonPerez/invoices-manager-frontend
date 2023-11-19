/* eslint-disable react-hooks/exhaustive-deps */
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface BaseSelectorProps {
  children: ReactNode;
  onClose: () => void;
}

const BaseSelector: FunctionComponent<BaseSelectorProps> = (props) => {
  return (
    <BaseSelectorStyles>
      <div className="invisible-box" onClick={props.onClose} />
      {props.children}
    </BaseSelectorStyles>
  );
};

const BaseSelectorStyles = styled.div`
  background-color: ${({ theme }) => theme.selector.background};
  box-shadow: 0px 10px 20px 0px ${({ theme }) => theme.selector.shadow};
  border-radius: 0.75rem;
  position: relative;
  z-index: 3;

  .invisible-box {
    z-index: 2;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export default BaseSelector;

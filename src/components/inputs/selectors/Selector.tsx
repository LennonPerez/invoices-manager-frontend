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
      <div className="dialog">{props.children}</div>
      <div className="backdrop" onClick={props.onClose} />
    </BaseSelectorStyles>
  );
};

const BaseSelectorStyles = styled.div`
  .dialog {
    background-color: ${({ theme }) => theme.selector.background};
    box-shadow: 0px 10px 20px 0px ${({ theme }) => theme.selector.shadow};
    border-radius: 0.75rem;
    position: absolute;
    width: 100%;
    z-index: 3;
  }
  .backdrop {
    /* background-color: red; */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
`;

export default BaseSelector;

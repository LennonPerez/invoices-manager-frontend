/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

interface BaseModalProps {
  children: ReactNode;
  isOpen: boolean;
  isDimisible?: boolean;
  onClose: () => void;
}

const BaseModal: FunctionComponent<BaseModalProps> = ({
  children,
  isOpen,
  isDimisible = true,
  onClose,
}) => {
  const [render, setRender] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRender(true);
      setTimeout(() => {
        setShow(true);
      }, 50);
    } else {
      closeModal();
    }
  }, [isOpen]);

  const closeModal = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
      setRender(false);
    }, 300);
  };

  if (!render) return null;

  return (
    <BaseModalStyles $show={show}>
      <div className="overlay" onClick={isDimisible ? closeModal : undefined} />
      <div className="modal">{children}</div>
    </BaseModalStyles>
  );
};

interface BaseModalStylesProps {
  $show: boolean;
}

const BaseModalStyles = styled.div<BaseModalStylesProps>`
  .overlay {
    opacity: ${({ $show }) => ($show ? "1" : "0")};
    transition: opacity 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 4;
  }

  .modal {
    transform: translate(-50%, -50%)
      scale(${({ $show }) => ($show ? "1" : "0")});
    transition: transform 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.modal.background};
    box-shadow: 0px 10px 10px -10px ${({ theme }) => theme.modal.shadow};
    border-radius: 0.5rem;
    z-index: 5;
    position: fixed;
    left: 50%;
    top: 50%;
  }
`;

export default BaseModal;

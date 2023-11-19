"use client";

import { FunctionComponent } from "react";
import styled from "styled-components";
import { DangerButton, SecondaryButton } from "../buttons";
import BaseModal from "./BaseModal";

interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = ({
  isOpen,
  title,
  description,
  cancelButtonText,
  confirmButtonText,
  onClose,
  onConfirm,
}) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <ConfirmationModalStyles>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <div className="buttons">
          <SecondaryButton onClick={onClose}>
            {cancelButtonText ?? "Cancel"}
          </SecondaryButton>
          <DangerButton onClick={onConfirm}>
            {confirmButtonText ?? "Confirm"}
          </DangerButton>
        </div>
      </ConfirmationModalStyles>
    </BaseModal>
  );
};

const ConfirmationModalStyles = styled.div`
  width: calc(100vw - 3rem);
  max-width: 30rem;
  padding: 2rem;

  .title {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 2rem;
    margin-bottom: 1.5rem;
  }
  .description {
    color: ${({ theme }) => theme.palette.text.tertiary};
    line-height: 1.375rem;
    letter-spacing: -0.01563rem;
    margin-bottom: 2rem;
  }
  .buttons {
    display: flex;
    justify-content: end;
    gap: 0.5rem;
  }
`;

export default ConfirmationModal;

import {
  PrimaryButton,
  SecondaryButton,
  DangerButton,
} from "@/components/buttons";
import { FunctionComponent } from "react";
import styled from "styled-components";

const InvoiceDetailsMobileCTAs: FunctionComponent<InvoiceDetailsCTAsProps> = ({
  isLoadingAction,
  showEditButton,
  showDeleteButton,
  showMarkAsPaidButton,
  showMarkAsPendingButton,
}) => {
  return (
    <InvoiceDetailsCTAsStyles>
      {showEditButton ? (
        <div className="edit-button">
          <SecondaryButton
            $minHeight="3rem"
            $width="100%"
            disabled={isLoadingAction}
          >
            Edit
          </SecondaryButton>
        </div>
      ) : null}
      {showDeleteButton ? (
        <div className="delete-button">
          <DangerButton
            $minHeight="3rem"
            $width="100%"
            disabled={isLoadingAction}
          >
            Delete
          </DangerButton>
        </div>
      ) : null}
      {showMarkAsPaidButton ? (
        <div className="mark-as-paid-button">
          <PrimaryButton
            $minHeight="3rem"
            $width="100%"
            disabled={isLoadingAction}
          >
            Mark as Paid
          </PrimaryButton>
        </div>
      ) : null}
      {showMarkAsPendingButton ? (
        <div className="mark-as-pending-button">
          <PrimaryButton
            $minHeight="3rem"
            $width="100%"
            disabled={isLoadingAction}
          >
            Mark as Pending
          </PrimaryButton>
        </div>
      ) : null}
    </InvoiceDetailsCTAsStyles>
  );
};

const InvoiceDetailsCTAsStyles = styled.div`
  background-color: ${({ theme }) => theme.card.background};
  box-shadow: 0px 10px 10px -10px ${({ theme }) => theme.card.shadow};
  min-height: 5.6875rem;
  padding: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;

  .edit-button {
    width: 100%;
    max-width: 4.5625rem;
  }

  .delete-button {
    width: 100%;
    max-width: 5.5625rem;
  }

  .mark-as-paid-button {
    width: 100%;
    max-width: 9.3125rem;
  }

  .mark-as-pending-button {
    width: 100%;
    max-width: 9.3125rem;
  }
`;

export interface InvoiceDetailsCTAsProps {
  isLoadingAction: boolean;
  showEditButton: boolean;
  showDeleteButton: boolean;
  showMarkAsPaidButton: boolean;
  showMarkAsPendingButton: boolean;
}

export default InvoiceDetailsMobileCTAs;

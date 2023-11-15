import {
  PrimaryButton,
  SecondaryButton,
  DangerButton,
} from "@/components/Button";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface InvoiceDetailsCTAsProps {
  isLoadingAction: boolean;
}

const InvoiceDetailsMobileCTAs: FunctionComponent<
  InvoiceDetailsCTAsProps
> = () => {
  return (
    <InvoiceDetailsCTAsStyles>
      <div className="edit-button">
        <SecondaryButton $minHeight="3rem" $width="100%">
          Edit
        </SecondaryButton>
      </div>
      <div className="delete-button">
        <DangerButton $minHeight="3rem" $width="100%">
          Delete
        </DangerButton>
      </div>
      <div className="mark-as-paid-button">
        <PrimaryButton $minHeight="3rem" $width="100%">
          Mark as Paid
        </PrimaryButton>
      </div>
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
`;

export default InvoiceDetailsMobileCTAs;

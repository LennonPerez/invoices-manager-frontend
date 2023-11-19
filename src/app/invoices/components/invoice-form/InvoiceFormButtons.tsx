import { FunctionComponent } from "react";
import styled from "styled-components";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "@/components/buttons";

interface InvoiceFormButtonsProps {
  isLoadingAction: boolean;
  isEditing: boolean;
}

const InvoiceFormButtons: FunctionComponent<InvoiceFormButtonsProps> = ({
  isLoadingAction,
  isEditing,
}) => {
  return (
    <InvoiceFormButtonsStyles>
      <div className="cancel-button">
        <SecondaryButton
          $minHeight="3rem"
          $width="100%"
          $padding="0"
          disabled={isLoadingAction}
        >
          {isEditing ? "Cancel" : "Discard"}
        </SecondaryButton>
      </div>
      {isEditing ? null : (
        <div className="draft-button">
          <TertiaryButton
            $minHeight="3rem"
            $width="100%"
            $padding="0"
            disabled={isLoadingAction}
          >
            Save as Draft
          </TertiaryButton>
        </div>
      )}
      <div className="save-button">
        <PrimaryButton
          $minHeight="3rem"
          $width="100%"
          $padding="0"
          disabled={isLoadingAction}
        >
          {isEditing ? "Save Changes" : "Save & Send"}
        </PrimaryButton>
      </div>
    </InvoiceFormButtonsStyles>
  );
};

const InvoiceFormButtonsStyles = styled.div`
  background-color: ${({ theme }) => theme.card.background};
  box-shadow: 0px 10px 10px -10px ${({ theme }) => theme.card.shadow};
  min-height: 5.6875rem;
  padding: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;

  .cancel-button {
    width: 100%;
    max-width: 6rem;
  }

  .draft-button {
    width: 100%;
    max-width: 8rem;
  }

  .save-button {
    width: 100%;
    max-width: 8.625rem;
  }
`;

export default InvoiceFormButtons;

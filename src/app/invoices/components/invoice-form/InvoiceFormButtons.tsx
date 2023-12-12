import { FunctionComponent } from "react";
import styled from "styled-components";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "@/components/buttons";

interface InvoiceFormButtonsProps {
  isEditing: boolean;
  isLoadingAction: boolean;
  onCancel: () => void;
  onDraft?: () => void;
  onSave: () => void;
}

const InvoiceFormButtons: FunctionComponent<InvoiceFormButtonsProps> = ({
  isEditing,
  isLoadingAction,
  onCancel,
  onDraft,
  onSave,
}) => {
  return (
    <InvoiceFormButtonsStyles>
      <div className="cancel-button">
        <SecondaryButton
          type="button"
          minHeight="3rem"
          width="100%"
          padding="0"
          disabled={isLoadingAction}
          onClick={onCancel}
        >
          {isEditing ? "Cancel" : "Discard"}
        </SecondaryButton>
      </div>
      <div className="right-buttons">
        {isEditing ? null : (
          <div className="draft-button">
            <TertiaryButton
              type="button"
              minHeight="3rem"
              width="100%"
              padding="0"
              disabled={isLoadingAction}
              onClick={onDraft}
            >
              Save as Draft
            </TertiaryButton>
          </div>
        )}
        <div className={isEditing ? "save-changes-button" : "save-new-button"}>
          <PrimaryButton
            type="button"
            minHeight="3rem"
            width="100%"
            padding="0"
            disabled={isLoadingAction}
            onClick={onSave}
          >
            {isEditing ? "Save Changes" : "Save & Send"}
          </PrimaryButton>
        </div>
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

  @media (min-width: 768px) {
    box-shadow: none;
    background-color: transparent;
    border-radius: 0 20px 20px 0;
    padding: 2rem 3.5rem;
    justify-content: space-between;
  }

  .cancel-button {
    width: 100%;
    max-width: 6rem;
  }

  .right-buttons {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.5rem;
    width: 100%;
  }

  .draft-button {
    width: 100%;
    max-width: 8rem;
  }

  .save-changes-button {
    width: 100%;
    max-width: 8.625rem;
  }

  .save-new-button {
    width: 100%;
    max-width: 8rem;
  }
`;

export default InvoiceFormButtons;

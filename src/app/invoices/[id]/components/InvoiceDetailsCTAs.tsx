import { FunctionComponent } from "react";
import {
  PrimaryButton,
  SecondaryButton,
  DangerButton,
} from "@/components/buttons";

const InvoiceDetailsCTAs: FunctionComponent<InvoiceDetailsCTAsProps> = ({
  isLoadingAction,
  showEditButton,
  showDeleteButton,
  showMarkAsPaidButton,
  showMarkAsPendingButton,
  onTapEdit,
  onTapDelete,
  onTapPaid,
  onTapPending,
}) => {
  return (
    <>
      {showEditButton ? (
        <div className="edit-button">
          <SecondaryButton
            minHeight="3rem"
            width="100%"
            disabled={isLoadingAction}
            onClick={onTapEdit}
          >
            Edit
          </SecondaryButton>
        </div>
      ) : null}
      {showDeleteButton ? (
        <div className="delete-button">
          <DangerButton
            minHeight="3rem"
            width="100%"
            disabled={isLoadingAction}
            onClick={onTapDelete}
          >
            Delete
          </DangerButton>
        </div>
      ) : null}
      {showMarkAsPaidButton ? (
        <div className="mark-as-paid-button">
          <PrimaryButton
            minHeight="3rem"
            width="100%"
            disabled={isLoadingAction}
            onClick={onTapPaid}
          >
            Mark as Paid
          </PrimaryButton>
        </div>
      ) : null}
      {showMarkAsPendingButton ? (
        <div className="mark-as-pending-button">
          <PrimaryButton
            minHeight="3rem"
            width="100%"
            disabled={isLoadingAction}
            onClick={onTapPending}
          >
            Mark as Pending
          </PrimaryButton>
        </div>
      ) : null}
    </>
  );
};

export interface InvoiceDetailsCTAsProps {
  isLoadingAction?: boolean;
  showEditButton?: boolean;
  showDeleteButton?: boolean;
  showMarkAsPaidButton?: boolean;
  showMarkAsPendingButton?: boolean;
  onTapEdit?: () => void | undefined;
  onTapDelete?: () => void | undefined;
  onTapPaid?: () => void | undefined;
  onTapPending?: () => void | undefined;
}

export default InvoiceDetailsCTAs;

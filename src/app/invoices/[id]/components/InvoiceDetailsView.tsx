import { FunctionComponent, memo } from "react";
import { Invoice } from "@/types/invoice";
import { BaseError } from "@/services/requestHandler";
import InvoiceDetails from "./InvoiceDetails";
import InvoiceDetailsLoader from "./InvoiceDetailsLoader";
import InvoicesDetailsError from "./InvoiceDetailsError";

interface InvoiceDetailsViewProps {
  invoice?: Invoice | null | undefined;
  error?: BaseError | null | undefined;
  isLoading: boolean;
}

const InvoiceDetailsView: FunctionComponent<InvoiceDetailsViewProps> = ({
  invoice,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return <InvoiceDetailsLoader />;
  }

  if (error || invoice == null || invoice === undefined) {
    return (
      <InvoicesDetailsError
        errorCode={error?.code ?? "UNKNOWN_ERROR"}
        errorMessage={error?.message ?? "Unknown error"}
      />
    );
  }

  return <InvoiceDetails invoice={invoice} />;
};

export default memo(InvoiceDetailsView);

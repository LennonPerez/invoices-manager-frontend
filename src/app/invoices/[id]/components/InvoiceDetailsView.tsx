import { FunctionComponent, memo } from "react";
import { Invoice } from "@/types/invoice";
import { ResponseError } from "@/types/response";
import InvoiceDetails from "./InvoiceDetails";
import InvoiceDetailsLoader from "./InvoiceDetailsLoader";
import InvoicesDetailsError from "./InvoiceDetailsError";

interface InvoiceDetailsViewProps {
  invoice?: Invoice | undefined;
  error?: ResponseError | undefined;
  isLoading: boolean;
}

const InvoiceDetailsView: FunctionComponent<InvoiceDetailsViewProps> = ({
  invoice,
  isLoading: isFetching,
  error,
}) => {
  if (isFetching) {
    return <InvoiceDetailsLoader />;
  }

  if (error || invoice === undefined) {
    return (
      <InvoicesDetailsError
        errorCode={error?.errorCode ?? "UNKNOWN_ERROR"}
        errorMessage={error?.errorMessage ?? "Unknown error"}
      />
    );
  }

  return <InvoiceDetails invoice={invoice} />;
};

export default memo(InvoiceDetailsView);

import { FunctionComponent, memo } from "react";
import { Invoice } from "@/types/invoice";
import { ResponseError } from "@/types/response";
import InvoicesListLoader from "./InvoicesListLoader";
import InvoicesListError from "./InvoicesListError";
import InvoicesListEmptyState from "./InvoiceListEmptyState";
import InvoicesList from "./InvoicesList";

interface InvoicesListViewProps {
  invoices: Invoice[] | undefined;
  error?: ResponseError;
  isFetchingInvoices: boolean;
  isFetchingMoreInvoices: boolean;
}

const InvoicesListView: FunctionComponent<InvoicesListViewProps> = ({
  invoices,
  error,
  isFetchingInvoices,
  isFetchingMoreInvoices,
}) => {
  if (isFetchingInvoices) {
    return <InvoicesListLoader />;
  }

  if (error || invoices === undefined) {
    return (
      <InvoicesListError
        errorCode={error?.errorCode ?? "UNKNOWN_ERROR"}
        errorMessage={error?.errorMessage ?? "Unknown error"}
      />
    );
  }

  if (invoices.length === 0) {
    return <InvoicesListEmptyState />;
  }

  return (
    <InvoicesList
      invoices={invoices}
      isFetchingMoreInvoices={isFetchingMoreInvoices}
    />
  );
};

export default memo(InvoicesListView);

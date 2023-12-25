import { FunctionComponent, memo } from "react";
import { Invoice } from "@/types/invoice";
import { BaseError } from "@/services/requestHandler";
import InvoicesListLoader from "./InvoicesListLoader";
import InvoicesListError from "./InvoicesListError";
import InvoicesListEmptyState from "./InvoiceListEmptyState";
import InvoicesList from "./InvoicesList";

interface InvoicesListViewProps {
  invoices?: Invoice[] | null | undefined;
  error?: BaseError | null | undefined;
  isLoading: boolean;
  isLoadingMore: boolean;
}

const InvoicesListView: FunctionComponent<InvoicesListViewProps> = ({
  invoices,
  error,
  isLoading,
  isLoadingMore,
}) => {
  if (isLoading) {
    return <InvoicesListLoader />;
  }

  if (error || invoices === undefined || invoices === null) {
    return (
      <InvoicesListError
        errorCode={error?.code ?? "UNKNOWN_ERROR"}
        errorMessage={error?.message ?? "Unknown error"}
      />
    );
  }

  if (invoices.length === 0) {
    return <InvoicesListEmptyState />;
  }

  return (
    <InvoicesList invoices={invoices} isFetchingMoreInvoices={isLoadingMore} />
  );
};

export default memo(InvoicesListView);

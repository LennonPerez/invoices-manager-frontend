import { FunctionComponent, memo } from "react";
import { Invoice } from "@/types/invoice";
import { ResponseError } from "@/types/response";
import InvoiceDetailsCard from "./InvoiceDetailsCard";
import InvoiceDetailsCardLoader from "./invoiceDetailsCardLoader";

interface InvoiceDetailsProps {
  invoice: Invoice | undefined;
  error?: ResponseError | undefined;
  isFetching: boolean;
}

const InvoiceDetails: FunctionComponent<InvoiceDetailsProps> = ({
  invoice,
  isFetching,
  error,
}) => {
  if (isFetching) {
    return <InvoiceDetailsCardLoader />;
  }

  if (error || invoice === undefined) {
    return <p>Error</p>;
  }

  return <InvoiceDetailsCard invoice={invoice} />;
};

export default memo(InvoiceDetails);

import { FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Invoice } from "@/types/invoice";
import InvoiceCard from "./invoiceCard";
import InvoiceCardLoader from "./InvoiceCardLoader";

interface InvoicesListProps {
  invoices: Invoice[];
  isFetchingMoreInvoices: boolean;
}

const InvoicesList: FunctionComponent<InvoicesListProps> = ({
  invoices,
  isFetchingMoreInvoices,
}) => {
  const router = useRouter();

  const invoicesParsed = invoices.map((invoice) => ({
    ...invoice,
    createdAt: new Date(invoice.createdAt),
    paymentDue: new Date(invoice.paymentDue),
  }));

  return (
    <InvoicesListStyles>
      {invoicesParsed.map((e) => (
        <div
          key={e.id}
          className="invoice-card"
          onClick={() => router.push(`/invoices/${e.id}`)}
        >
          <InvoiceCard
            id={e.id}
            clientName={e.clientName}
            date={e.createdAt}
            amount={e.total}
            status={e.status}
          />
        </div>
      ))}
      {isFetchingMoreInvoices ? <InvoiceCardLoader /> : null}
    </InvoicesListStyles>
  );
};

const InvoicesListStyles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45.625rem;

  .invoice-card {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default InvoicesList;

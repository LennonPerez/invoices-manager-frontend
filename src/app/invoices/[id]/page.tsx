"use client";

import { FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import invoices from "@/mocks/invoices";
import InvoiceDetails from "./components/InvoiceDetails";
import InvoiceDetailsMobileCTAs from "./components/InvoiceDetailsMobileCTAs";
import BackButton from "../components/shared/BackButton";

interface InvoiceDetailsPageProps {
  params: {
    id: string;
  };
}

const InvoiceDetailsPage: FunctionComponent<InvoiceDetailsPageProps> = ({
  params,
}) => {
  console.log(params.id);
  const router = useRouter();
  const invoice = invoices[1];
  const isFetching = false;

  return (
    <InvoiceDetailsPageStyles id="invoice-details-page">
      <div className="back-button-container">
        <BackButton onClick={router.back} />
      </div>
      <InvoiceDetails
        invoice={invoice}
        isFetching={isFetching}
        error={undefined}
      />
      <InvoiceDetailsMobileCTAs
        isInitialLoading={false}
        isLoadingAction={isFetching}
        showDeleteButton={true}
        showEditButton={invoice.status !== "paid"}
        showMarkAsPaidButton={invoice.status === "pending"}
        showMarkAsPendingButton={invoice.status === "draft"}
      />
    </InvoiceDetailsPageStyles>
  );
};

const InvoiceDetailsPageStyles = styled.div`
  padding: 2rem 1.5rem 9.5rem 1.5rem;
  max-height: calc(100vh - 4.5rem);
  overflow-y: auto;

  .back-button-container {
    margin-bottom: 1.85rem;
  }
`;

export default InvoiceDetailsPage;

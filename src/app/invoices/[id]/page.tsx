"use client";

import { FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { LuChevronLeft } from "react-icons/lu";
import invoices from "@/mocks/invoices";
import { FourthButton } from "@/components/Button";
import InvoiceDetails from "./components/InvoiceDetails";
import InvoiceDetailsMobileCTAs from "./components/InvoiceDetailsMobileCTAs";

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
    <InvoiceDetailsPageStyles>
      <div className="back-button-container">
        <FourthButton $padding="0" $minHeight="0" onClick={router.back}>
          <LuChevronLeft className="chevron-icon" />
          Go back
        </FourthButton>
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

  .back-button-container {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 1.85rem;

    .chevron-icon {
      color: ${({ theme }) => theme.palette.primary.main};
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 1rem;
    }

    .text {
      font-size: 0.75rem;
    }
  }
`;

export default InvoiceDetailsPage;

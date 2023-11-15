"use client";

import { FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { LuChevronLeft } from "react-icons/lu";
import invoices from "@/mocks/invoices";
import { FourthButton } from "@/components/Button";
import InvoiceDetails from "./components/InvoiceDetails";
import InvoiceDetailsCTAs from "./components/InvoiceDetailsCTAs";
import useScroll from "@/hooks/useScroll";

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
  const scrollData = useScroll();
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
      <InvoiceDetails invoice={invoice} isFetching={isFetching} />
      {scrollData.isScrollingDownwards ? null : (
        <div className="mobile-ctas-container">
          <InvoiceDetailsCTAs isLoadingAction={isFetching} />
        </div>
      )}
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

  .mobile-ctas-container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export default InvoiceDetailsPage;

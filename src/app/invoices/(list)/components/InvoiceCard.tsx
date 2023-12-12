import { FunctionComponent } from "react";
import styled from "styled-components";
import { InvoiceStatus } from "@/types/invoice";
import { formatDate, formatAmount } from "@/utils/formatters";
import StatusBox from "@/app/invoices/components/shared/StatusBox";
import { FaChevronRight } from "react-icons/fa";
import useIsMobile from "@/hooks/useIsMobile";

interface InvoiceCardProps {
  id: string;
  clientName: string;
  date: Date;
  amount: number;
  status: InvoiceStatus;
}

const InvoiceCard: FunctionComponent<InvoiceCardProps> = (props) => {
  const isMobileSize = useIsMobile();

  const InvoiceID = () => (
    <h4 className="invoice-id">
      <span>#</span>
      {props.id}
    </h4>
  );

  const InvoiceClientName = () => (
    <p className="invoice-client-name">{props.clientName}</p>
  );

  const InvoiceDate = () => (
    <p className="invoice-date">{`Due ${formatDate(props.date)}`}</p>
  );

  const InvoiceAmount = () => (
    <h5 className="invoice-amount">{formatAmount(props.amount)}</h5>
  );

  if (!isMobileSize) {
    return (
      <InvoiceCardStyles>
        <InvoiceID />
        <InvoiceDate />
        <InvoiceClientName />
        <InvoiceAmount />
        <div className="right-column-container">
          <StatusBox status={props.status} />
          <FaChevronRight className="chevron-icon" />
        </div>
      </InvoiceCardStyles>
    );
  }

  return (
    <InvoiceCardStyles>
      <div className="top-row-container">
        <InvoiceID />
        <InvoiceClientName />
      </div>
      <div className="bottom-row-container">
        <div className="left-column">
          <InvoiceDate />
          <InvoiceAmount />
        </div>
        <StatusBox status={props.status} />
      </div>
    </InvoiceCardStyles>
  );
};

const InvoiceCardStyles = styled.div`
  background: ${({ theme }) => theme.card.background};
  box-shadow: 0px 10px 10px -10px ${({ theme }) => theme.card.shadow};
  min-height: 8.37rem;
  width: 100%;
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 1.05rem 1.5rem;
    min-height: 4.5rem;
    display: grid;
    grid-template-rows: 1;
    grid-template-columns: 3.75rem 6.75rem repeat(3, 1fr);
    grid-column-gap: 1.5rem;
    align-items: center;
  }

  @media (min-width: 1440px) {
    padding: 1.05rem 1.5rem 1.05rem 2rem;
    grid-column-gap: 2.5rem;
  }

  .top-row-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bottom-row-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-column {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
  }

  .right-column-container {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1.25rem;

    @media (min-width: 768px) {
      margin-left: 1rem;
    }
  }

  .invoice-id {
    font-size: 0.75rem;

    @media (min-width: 768px) {
      max-width: fit-content;
      text-align: start;
    }

    span {
      color: ${({ theme }) => theme.palette.secondary.main};
    }
  }

  .invoice-client-name {
    color: ${({ theme }) => theme.palette.text.primary};

    @media (min-width: 768px) {
      text-align: start;
    }
  }

  .invoice-date {
    color: ${({ theme }) => theme.palette.text.secondary};

    @media (min-width: 768px) {
      text-align: start;
    }
  }

  .invoice-amount {
    font-size: 1rem;

    @media (min-width: 768px) {
      text-align: end;
    }
  }

  .chevron-icon {
    color: ${({ theme }) => theme.palette.primary.main};
    width: 0.5rem;
    height: 1rem;
  }
`;

export default InvoiceCard;

import StatusBox from "@/components/StatusBox";
import { InvoiceStatus } from "@/types/invoice";
import { formatDate, formatAmount } from "@/utils/formatters";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface InvoiceCardProps {
  id: string;
  clientName: string;
  date: Date;
  amount: number;
  status: InvoiceStatus;
}

const InvoiceCard: FunctionComponent<InvoiceCardProps> = (props) => {
  return (
    <InvoiceCardStyles>
      <div className="top-row-container">
        <h4 className="invoice-id">
          <span>#</span>
          {props.id}
        </h4>
        <p className="client-name">{props.clientName}</p>
      </div>
      <div className="bottom-row-container">
        <div className="left-column">
          <p className="date">{`Due ${formatDate(props.date)}`}</p>
          <h5 className="amount">{formatAmount(props.amount)}</h5>
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

  .top-row-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .invoice-id {
      font-size: 0.75rem;

      span {
        color: ${({ theme }) => theme.palette.secondary.main};
      }
    }
  }

  .bottom-row-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-column {
      display: flex;
      flex-direction: column;

      .date {
        margin-bottom: 0.75rem;
      }

      .amount {
        font-size: 1rem;
      }
    }
  }
`;

export default InvoiceCard;

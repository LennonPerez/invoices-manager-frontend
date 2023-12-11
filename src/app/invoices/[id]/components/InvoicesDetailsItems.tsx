import { InvoiceItem } from "@/types/invoice";
import { formatAmount } from "@/utils/formatters";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface InvoicesDetailsItemsProps {
  items: InvoiceItem[];
  invoiceTotal: number;
  isMobile: boolean;
}

const InvoicesDetailsItems: FunctionComponent<InvoicesDetailsItemsProps> = ({
  items,
  invoiceTotal,
  isMobile,
}) => {
  if (isMobile) {
    return (
      <InvoicesDetailsItemsCardStyles>
        <div className="items-list-container">
          {items.map((item) => (
            <div key={item.id} className="item-container">
              <div className="info">
                <div className="item-name">{item.name}</div>
                <div className="item-price">
                  {`${item.quantity} x ${formatAmount(item.price)}`}
                </div>
              </div>
              <p className="item-amount">{formatAmount(item.total)}</p>
            </div>
          ))}
        </div>
        <div className="total-amount-container">
          <p className="title">Amount Due</p>
          <p className="value">{formatAmount(invoiceTotal)}</p>
        </div>
      </InvoicesDetailsItemsCardStyles>
    );
  }

  return (
    <InvoicesDetailsItemsCardStyles>
      <table className="items-list-container">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>QTY.</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="item-name">{item.name}</td>
              <td className="item-qty">{item.quantity}</td>
              <td className="item-price">{formatAmount(item.price)}</td>
              <td className="item-amount">{formatAmount(item.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-amount-container">
        <p className="title">Amount Due</p>
        <p className="value">{formatAmount(invoiceTotal)}</p>
      </div>
    </InvoicesDetailsItemsCardStyles>
  );
};

const InvoicesDetailsItemsCardStyles = styled.div`
  border-radius: 0.5rem;

  .items-list-container {
    background-color: ${({ theme }) => theme.card.lightContrastBackground};
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    padding: 1.5rem;
    width: 100%;

    @media (min-width: 768px) {
      padding: 2rem;

      tr {
        &:last-child {
          td {
            padding-bottom: 0;
          }
        }

        th {
          color: ${({ theme }) => theme.palette.text.secondary};
          font-size: 0.6875rem;
          font-style: normal;
          font-weight: 500;
          line-height: 1.125rem;
          letter-spacing: -0.01431rem;
        }

        th,
        td {
          text-align: end;
          padding-bottom: 2rem;

          &:first-child {
            text-align: start;
          }
        }
      }
    }

    .item-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;

      &:last-child {
        margin-bottom: 0;
      }

      .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }

    .item-name {
      color: ${({ theme }) => theme.palette.text.primary};
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 0.9375rem;
      letter-spacing: -0.01563rem;
      margin-bottom: 0.5rem;
    }

    .item-price,
    .item-qty {
      color: ${({ theme }) => theme.palette.text.fourth};
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 0.9375rem;
      letter-spacing: -0.01563rem;

      @media (min-width: 768px) {
        color: ${({ theme }) => theme.palette.text.secondary};
      }
    }

    .item-amount {
      color: ${({ theme }) => theme.palette.text.primary};
      text-align: right;
      font-weight: 700;
      line-height: 0.9375rem;
      letter-spacing: -0.01563rem;

      @media (min-width: 768px) {
        font-size: 0.75rem;
      }
    }
  }

  .total-amount-container {
    background-color: ${({ theme }) => theme.card.darkContrastBackground};
    border-radius: 0rem 0rem 0.5rem 0.5rem;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
      padding: 1.5rem 2rem;
    }

    .title {
      color: ${({ theme }) => theme.palette.common.white};
      font-size: 0.6875rem;
      line-height: 1.125rem;
      letter-spacing: -0.01431rem;
    }

    .value {
      color: ${({ theme }) => theme.palette.common.white};
      text-align: right;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 2rem;
      letter-spacing: -0.02606rem;

      @media (min-width: 768px) {
        font-size: 1.5rem;
        letter-spacing: -0.03125rem;
      }
    }
  }
`;

export default InvoicesDetailsItems;

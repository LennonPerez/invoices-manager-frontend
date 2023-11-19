import { FunctionComponent } from "react";
import styled from "styled-components";
import { Invoice } from "@/types/invoice";
import StatusBox from "@/app/invoices/components/shared/StatusBox";
import { formatAmount, formatDate } from "@/utils/formatters";
interface InvoiceDetailsCardProps {
  invoice: Invoice;
}

const InvoiceDetailsCard: FunctionComponent<InvoiceDetailsCardProps> = ({
  invoice,
}) => {
  return (
    <InvoiceDetailsCardStyles>
      <div className="card status-container">
        <p>Status</p>
        <StatusBox status={invoice.status} />
      </div>
      <div className="card details-container">
        <div className="top-info">
          <div className="id-container">
            <p className="id">
              <span>#</span>
              {invoice.id}
            </p>
            <p className="description">{invoice.description}</p>
          </div>
          <div className="sender-address-container">
            <p className="street-address">{invoice.senderAddress.street}</p>
            <p className="city-address">{invoice.senderAddress.city}</p>
            <p className="postal-code-address">
              {invoice.senderAddress.postCode}
            </p>
            <p className="country-address">{invoice.senderAddress.country}</p>
          </div>
        </div>
        <div className="middle-info">
          <div className="billing-info-container">
            <div className="dates-container">
              <div className="invoice-date-container">
                <p className="title">Invoice Date</p>
                <p className="value">
                  {formatDate(new Date(invoice.createdAt))}
                </p>
              </div>
              <div className="payment-due-container">
                <p className="title">Payment Due</p>
                <p className="value">
                  {formatDate(new Date(invoice.paymentDue))}
                </p>
              </div>
            </div>
            <div className="billing-address-container">
              <p className="title">Bill to</p>
              <p className="value">{invoice.clientName}</p>
              <div className="address">
                <p className="street-address">{invoice.clientAddress.street}</p>
                <p className="city-address">{invoice.clientAddress.city}</p>
                <p className="postal-code-address">
                  {invoice.clientAddress.postCode}
                </p>
                <p className="country-address">
                  {invoice.clientAddress.country}
                </p>
              </div>
            </div>
          </div>
          <div className="client-email-container">
            <p className="title">Sent to</p>
            <p className="value">{invoice.clientEmail}</p>
          </div>
        </div>
        <div className="bottom-info">
          <div className="items-list-container">
            {invoice.items.map((item) => (
              <div key={item.id} className="item-container">
                <div className="info">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">
                    {`${item.quantity} x ${formatAmount(item.price)}`}
                  </div>
                </div>
                <p className="amount">{formatAmount(item.total)}</p>
              </div>
            ))}
          </div>
          <div className="total-amount-container">
            <p className="title">Amount Due</p>
            <p className="value">{formatAmount(invoice.total)}</p>
          </div>
        </div>
      </div>
    </InvoiceDetailsCardStyles>
  );
};

const InvoiceDetailsCardStyles = styled.div`
  .card {
    background-color: ${({ theme }) => theme.card.background};
    box-shadow: 0px 10px 10px -10px ${({ theme }) => theme.card.shadow};
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .status-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 5.6875rem;
  }

  .details-container {
    .top-info {
      margin-bottom: 2rem;

      .id-container {
        margin-bottom: 2rem;

        .id {
          color: ${({ theme }) => theme.palette.text.primary};
          font-weight: 700;
          margin-bottom: 0.25rem;

          span {
            color: ${({ theme }) => theme.palette.text.disabled};
          }
        }
      }

      .sender-address-container {
        p {
          font-size: 0.6875rem;
          line-height: 1.125rem;
          letter-spacing: -0.01431rem;
        }
      }
    }

    .middle-info {
      display: flex;
      flex-direction: column;
      margin-bottom: 2.25rem;

      .billing-info-container {
        display: flex;
        margin-bottom: 2.25rem;

        .title {
          margin-bottom: 0.75rem;
        }

        .value {
          color: ${({ theme }) => theme.palette.text.primary};
          font-size: 0.9375rem;
          font-weight: 700;
        }

        .dates-container {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
        }

        .billing-address-container {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .address {
            margin-top: 0.6rem;

            p {
              font-size: 0.6875rem;
              line-height: 1.125rem;
              letter-spacing: -0.01431rem;
            }
          }
        }
      }

      .client-email-container {
        .title {
          margin-bottom: 0.75rem;
        }

        .value {
          color: ${({ theme }) => theme.palette.text.primary};
          font-size: 0.9375rem;
          font-weight: 700;
        }
      }
    }

    .bottom-info {
      border-radius: 0.5rem;

      .items-list-container {
        background-color: ${({ theme }) => theme.card.lightContrastBackground};
        border-radius: 0.5rem 0.5rem 0rem 0rem;
        padding: 1.5rem;

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

            .item-name {
              color: ${({ theme }) => theme.palette.text.primary};
              font-size: 0.75rem;
              font-weight: 700;
              line-height: 0.9375rem;
              letter-spacing: -0.01563rem;
              margin-bottom: 0.5rem;
            }

            .item-price {
              color: ${({ theme }) => theme.palette.text.disabled};
              font-size: 0.75rem;
              font-weight: 700;
              line-height: 0.9375rem;
              letter-spacing: -0.01563rem;
            }
          }

          .amount {
            color: ${({ theme }) => theme.palette.text.primary};
            text-align: right;
            font-weight: 700;
            line-height: 0.9375rem;
            letter-spacing: -0.01563rem;
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

        .title {
          color: ${({ theme }) => theme.palette.common.white};
          font-size: 0.6875rem;
          line-height: 1.125rem;
          letter-spacing: -0.01431rem;
        }

        .value {
          color: ${({ theme }) => theme.palette.common.white};
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 2rem;
          letter-spacing: -0.02606rem;
        }
      }
    }
  }
`;

export default InvoiceDetailsCard;

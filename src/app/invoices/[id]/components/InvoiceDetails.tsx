import { FunctionComponent } from "react";
import styled from "styled-components";
import useIsMobile from "@/hooks/useIsMobile";
import { Invoice } from "@/types/invoice";
import StatusBox from "@/app/invoices/components/shared/StatusBox";
import { formatDate } from "@/utils/formatters";
import InvoiceDetailsCTAsProps from "./InvoiceDetailsCTAs";
import InvoicesDetailsItems from "./InvoicesDetailsItems";

interface InvoiceDetailsProps {
  invoice: Invoice;
}

const InvoiceDetails: FunctionComponent<InvoiceDetailsProps> = ({
  invoice,
}) => {
  const isMobile = useIsMobile();
  return (
    <InvoiceDetailsCardStyles>
      <div className="card top-card-container">
        <div className="status-container">
          <p>Status</p>
          <StatusBox status={invoice.status} />
        </div>
        {isMobile ? null : (
          <div className="ctas-container">
            <InvoiceDetailsCTAsProps
              showDeleteButton={true}
              showEditButton={invoice.status !== "paid"}
              showMarkAsPaidButton={invoice.status === "pending"}
              showMarkAsPendingButton={invoice.status === "draft"}
            />
          </div>
        )}
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
        <InvoicesDetailsItems
          items={invoice.items}
          invoiceTotal={invoice.total}
          isMobile={isMobile}
        />
      </div>
    </InvoiceDetailsCardStyles>
  );
};

const InvoiceDetailsCardStyles = styled.div`
  width: 100%;
  max-width: 45.625rem;

  .card {
    background-color: ${({ theme }) => theme.card.background};
    box-shadow: 0px 10px 10px -10px ${({ theme }) => theme.card.shadow};
    width: 100%;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      padding: 1.25rem 2rem;
      margin-bottom: 1.5rem;
    }

    &:last-child {
      margin-bottom: 0;

      @media (min-width: 768px) {
        padding: 2rem;
      }
    }
  }

  .top-card-container {
    min-height: 5.6875rem;

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .status-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .ctas-container {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 0.5rem;
    }
  }

  .details-container {
    .top-info {
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
      }

      .id-container {
        margin-bottom: 2rem;

        @media (min-width: 768px) {
          margin-bottom: 0.5rem;
        }

        .id {
          color: ${({ theme }) => theme.palette.text.primary};
          font-weight: 700;
          margin-bottom: 0.25rem;

          span {
            color: ${({ theme }) => theme.palette.text.fourth};
          }
        }

        @media (min-width: 768px) {
          .id,
          span {
            font-size: 1rem;
          }
        }
      }

      .sender-address-container {
        p {
          font-size: 0.6875rem;
          line-height: 1.125rem;
          letter-spacing: -0.01431rem;

          @media (min-width: 768px) {
            text-align: end;
          }
        }
      }
    }

    .middle-info {
      display: flex;
      flex-direction: column;
      margin-bottom: 2.25rem;

      @media (min-width: 768px) {
        display: grid;
        grid-template-rows: 1;
        grid-template-columns: 65% 35%;
        margin-bottom: 1rem;
      }

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
  }
`;

export default InvoiceDetails;

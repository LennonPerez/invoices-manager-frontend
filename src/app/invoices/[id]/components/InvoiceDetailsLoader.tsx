import { FunctionComponent } from "react";
import styled from "styled-components";
import InvoicesDetailsItemsLoader from "./InvoiceDetailsItemLoader";

const InvoiceDetailsLoader: FunctionComponent = () => {
  return (
    <InvoiceDetailsCardLoaderStyles>
      <div className="card top-card-container">
        <div className="status-container">
          <p className="status-text">Status</p>
          <div className="loader status-box" />
        </div>
        <div className="buttons-container">
          <div className="loader button" />
          <div className="loader button" />
          <div className="loader button" />
        </div>
      </div>
      <div className="card details-container">
        <div className="top-info">
          <div className="id-container">
            <div className="loader id" />
            <div className="loader description" />
          </div>
          <div className="address-container sender">
            <div className="loader street-address" />
            <div className="loader city-address" />
            <div className="loader postal-code-address" />
            <div className="loader country-address" />
          </div>
        </div>
        <div className="middle-info">
          <div className="billing-info-container">
            <div className="dates-container">
              <div className="invoice-date-container">
                <p className="title">Invoice Date</p>
                <div className="loader value" />
              </div>
              <div className="payment-due-container">
                <p className="title">Payment Due</p>
                <div className="loader value" />
              </div>
            </div>
            <div className="address-container">
              <p className="title">Bill to</p>
              <p className="loader value" />
              <div className="loader address" />
              <div className="loader street-address" />
              <div className="loader city-address" />
              <div className="loader postal-code-address" />
              <div className="loader country-address" />
            </div>
          </div>
          <div className="client-email-container">
            <p className="title">Sent to</p>
            <div className="loader value" />
          </div>
        </div>
        <InvoicesDetailsItemsLoader />
      </div>
    </InvoiceDetailsCardLoaderStyles>
  );
};

const InvoiceDetailsCardLoaderStyles = styled.div`
  .loader {
    border-radius: 0.25rem;
    animation: skeleton-loading 1s linear infinite alternate;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: ${({ theme }) => theme.palette.background.default};
    }
    100% {
      background-color: ${({ theme }) => theme.palette.background.lightPaper};
    }
  }

  .card {
    background-color: ${({ theme }) => theme.card.background};
    box-shadow: 0px 10px 10px -10px ${({ theme }) => theme.card.shadow};
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 5.6875rem;

    .status-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      .status-box {
        width: 6.5rem;
        height: 2.5rem;
        border-radius: 0.375rem;
      }
    }

    .buttons-container {
      display: none;

      @media (min-width: 768px) {
        display: flex;
        gap: 0.5rem;

        .button {
          border-radius: 1.5rem;
          height: 3rem;

          &:nth-child(1) {
            width: 4.5rem;
          }
          &:nth-child(2) {
            width: 5.5rem;
          }
          &:nth-child(3) {
            width: 8.2rem;
          }
        }
      }
    }
  }

  .details-container {
    .address-container {
      display: flex;
      flex-direction: column;
      align-items: start;

      .street-address {
        width: 6rem;
        height: 0.87rem;
        margin-bottom: 0.25rem;
      }
      .city-address {
        width: 3rem;
        height: 0.87rem;
        margin-bottom: 0.25rem;
      }
      .postal-code-address {
        width: 2.5rem;
        height: 0.87rem;
        margin-bottom: 0.25rem;
      }
      .country-address {
        width: 6rem;
        height: 0.87rem;
      }
    }

    .top-info {
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;

        .sender {
          align-items: end;
        }
      }

      .id-container {
        margin-bottom: 2rem;

        @media (min-width: 768px) {
          margin-bottom: 0.5rem;
        }

        .id {
          width: 3.625rem;
          height: 0.9375rem;
          margin-bottom: 0.25rem;

          @media (min-width: 768px) {
            margin-bottom: 0.5rem;
          }
        }

        .description {
          width: 6rem;
          height: 0.9375rem;
        }
      }
    }

    .middle-info {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;

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
          width: 6rem;
          height: 1.25rem;
        }

        .dates-container {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
        }

        .address-container {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .value {
            width: 5rem;
            height: 1.25rem;
            margin-bottom: 0.75rem;
          }
        }
      }

      .client-email-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .title {
          margin-bottom: 0.75rem;
        }

        .value {
          width: 6rem;
          height: 1.25rem;
        }
      }
    }
  }
`;

export default InvoiceDetailsLoader;

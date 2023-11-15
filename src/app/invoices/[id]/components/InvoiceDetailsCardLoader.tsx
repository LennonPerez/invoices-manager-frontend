import styled from "styled-components";
import { generateIDs } from "@/utils/generators";

const InvoiceDetailsCardLoader = () => {
  const items = generateIDs(3);

  return (
    <InvoiceDetailsCardLoaderStyles>
      <div className="card status-container">
        <p className="status-text">Status</p>
        <div className="loader status-box" />
      </div>
      <div className="card details-container">
        <div className="top-info">
          <div className="id-container">
            <div className="loader id" />
            <div className="loader description" />
          </div>
          <div className="address-container">
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
        <div className="bottom-info">
          <div className="items-list-container">
            {items.map((i) => (
              <div key={i} className="item-container">
                <div className="info">
                  <div className="loader-contrast item-name" />
                  <div className="loader-contrast item-price" />
                </div>
                <div className="loader-contrast amount" />
              </div>
            ))}
          </div>
          <div className="total-amount-container">
            <p className="title">Amount Due</p>
            <div className="loader-contrast value" />
          </div>
        </div>
      </div>
    </InvoiceDetailsCardLoaderStyles>
  );
};

const InvoiceDetailsCardLoaderStyles = styled.div`
  .loader {
    border-radius: 0.25rem;
    animation: skeleton-loading 1s linear infinite alternate;
  }

  .loader-contrast {
    border-radius: 0.25rem;
    animation: skeleton-loading-contrast 1s linear infinite alternate;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: ${({ theme }) => theme.palette.background.default};
    }
    100% {
      background-color: ${({ theme }) => theme.palette.background.lightPaper};
    }
  }

  @keyframes skeleton-loading-contrast {
    0% {
      background-color: ${({ theme }) => theme.palette.background.default};
    }
    100% {
      background-color: ${({ theme }) => theme.palette.background.paper};
    }
  }

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

    .status-box {
      width: 6.5rem;
      height: 2.5rem;
      border-radius: 0.375rem;
    }
  }

  .details-container {
    .address-container {
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

      .id-container {
        margin-bottom: 2rem;

        .id {
          width: 3.625rem;
          height: 0.9375rem;
          margin-bottom: 0.25rem;
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
          min-height: 2.375rem;
          margin-bottom: 1.5rem;

          &:last-child {
            margin-bottom: 0;
          }

          .info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            .item-name {
              width: 5.75rem;
              height: 0.9375rem;
              margin-bottom: 0.5rem;
            }

            .item-price {
              width: 4.6875rem;
              height: 0.9375rem;
            }
          }

          .amount {
            width: 3.5625rem;
            height: 0.9375rem;
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
          width: 6.25rem;
          height: 2rem;
        }
      }
    }
  }
`;

export default InvoiceDetailsCardLoader;

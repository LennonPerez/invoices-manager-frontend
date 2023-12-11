import { FunctionComponent } from "react";
import styled from "styled-components";
import useIsMobile from "@/hooks/useIsMobile";
import { generateIDs } from "@/utils/generators";

const InvoicesDetailsItemsLoader: FunctionComponent = () => {
  const isMobile = useIsMobile();
  const items = generateIDs(2);

  if (isMobile) {
    return (
      <InvoicesDetailsItemsCardStyles>
        <div className="items-list-container">
          {items.map((i) => (
            <div key={i} className="item-container">
              <div className="info">
                <div className="loader-contrast item-name" />
                <div className="loader-contrast item-price" />
              </div>
              <div className="loader-contrast item-amount" />
            </div>
          ))}
        </div>
        <div className="total-amount-container">
          <p className="title">Amount Due</p>
          <div className="loader-contrast value" />
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
            <tr key={item}>
              <td className="item-name">
                <div className="loader-contrast" />
              </td>
              <td className="item-qty">
                <div className="loader-contrast qty" />
              </td>
              <td className="item-price">
                <div className="loader-contrast" />
              </td>
              <td className="item-amount">
                <div className="loader-contrast" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-amount-container">
        <p className="title">Amount Due</p>
        <div className="loader-contrast value" />
      </div>
    </InvoicesDetailsItemsCardStyles>
  );
};

const InvoicesDetailsItemsCardStyles = styled.div`
  border-radius: 0.5rem;

  .loader-contrast {
    border-radius: 0.25rem;
    animation: skeleton-loading-contrast 1s linear infinite alternate;
  }

  @keyframes skeleton-loading-contrast {
    0% {
      background-color: ${({ theme }) => theme.palette.background.default};
    }
    100% {
      background-color: ${({ theme }) => theme.palette.background.paper};
    }
  }

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

        td,
        th {
          text-align: end;
          padding-bottom: 2rem;

          &:first-child {
            text-align: start;
          }

          div {
            height: 0.93rem;
            width: 4rem;
            margin-left: auto;
          }

          .qty {
            width: 2rem;
          }
        }

        .item-name {
          div {
            height: 0.93rem;
            width: 5.75rem;
            margin-left: 0;
            margin-right: auto;
          }
        }
      }
    }

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

        .item-price,
        .item-qty {
          width: 4.6875rem;
          height: 0.9375rem;
        }
      }

      .item-amount {
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
      width: 6.25rem;
      height: 2rem;

      @media (min-width: 768px) {
        width: 7.5rem;
      }
    }
  }
`;

export default InvoicesDetailsItemsLoader;

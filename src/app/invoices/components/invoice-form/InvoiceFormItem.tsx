import { FunctionComponent } from "react";
import styled from "styled-components";
import { BiSolidTrashAlt } from "react-icons/bi";
import { BaseInput } from "@/components/inputs";
import { formatAmount } from "@/utils/formatters";

interface InvoiceFormItemProps {}

const InvoiceFormItem: FunctionComponent<InvoiceFormItemProps> = () => {
  return (
    <InvoiceFormItemStyles>
      <div className="top">
        <div className="input name-input">
          <BaseInput label="Item name" />
        </div>
      </div>
      <div className="bottom">
        <div className="input quantity-input">
          <BaseInput label="Qty." />
        </div>
        <div className="input price-input">
          <BaseInput label="Price" />
        </div>
        <div className="total-amount-container">
          <span className="label">Total</span>
          <p className="amount">{formatAmount(156.01, false)}</p>
        </div>
        <div className="delete-item-button">
          <BiSolidTrashAlt className="icon" />
        </div>
      </div>
    </InvoiceFormItemStyles>
  );
};

const InvoiceFormItemStyles = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }

  .top {
    width: 100%;
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
      width: 42%;
      margin-bottom: 0;
    }

    .name-input {
      width: 100%;
    }
  }

  .bottom {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      width: 58%;
      margin-bottom: 1rem;
      display: grid;
      grid-template-columns: 3rem repeat(2, 1fr) 1.25rem;
      grid-column-gap: 1rem;
    }

    .quantity-input {
      width: 11rem;

      @media (min-width: 768px) {
        width: 100%;
      }
    }

    .price-input {
      width: 100%;
    }

    .total-amount-container {
      display: flex;
      flex-direction: column;
      width: 100%;

      .label {
        color: ${({ theme }) => theme.palette.text.fourth};
        margin-bottom: 0.625rem;

        @media (min-width: 768px) {
          color: ${({ theme }) => theme.palette.text.secondary};
        }
      }

      .amount {
        color: ${({ theme }) => theme.palette.text.fourth};
        display: flex;
        justify-content: start;
        align-items: center;
        height: 3rem;
        width: 100%;
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 0.9375rem;
        letter-spacing: -0.01563rem;
        overflow-x: auto;

        &::-webkit-scrollbar {
          display: none;
        }

        &::-webkit-scrollbar-thumb {
          display: none;
        }

        @media (min-width: 768px) {
          color: ${({ theme }) => theme.palette.text.secondary};
        }
      }
    }

    .delete-item-button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3rem;
      /* padding: 0.5rem; */
      cursor: pointer;
      border-radius: 0.5rem;

      @media (hover: hover) {
        &:hover {
          /* background-color: ${({ theme }) =>
            theme.palette.background.lightPaper}; */

          .icon {
            color: ${({ theme }) => theme.buttons.danger.background};
          }
        }
      }
      .icon {
        color: ${({ theme }) => theme.palette.text.fourth};
        height: 1.25rem;
        width: 1.25rem;
      }
    }
  }
`;

export default InvoiceFormItem;

import { FunctionComponent } from "react";
import styled from "styled-components";
import { BiSolidTrashAlt } from "react-icons/bi";
import { BaseInput } from "@/components/inputs";
import { formatAmount } from "@/utils/formatters";

interface InvoiceFormItemProps {}

const InvoiceFormItem: FunctionComponent<InvoiceFormItemProps> = () => {
  return (
    <InvoiceFormItemStyles>
      <div className="input quantity">
        <BaseInput label="Qty." />
      </div>
      <div className="input price">
        <BaseInput label="Price" />
      </div>
      <div className="total-amount-container">
        <span className="label">Total</span>
        <p className="amount">{formatAmount(156.01, false)}</p>
      </div>
      <div className="delete-item-button">
        <BiSolidTrashAlt className="icon" />
      </div>
    </InvoiceFormItemStyles>
  );
};

const InvoiceFormItemStyles = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 3rem;

  .quantity {
    width: 14rem;
  }

  .price {
    width: 100%;
  }

  .total-amount-container {
    display: flex;
    flex-direction: column;
    width: 100%;

    .label {
      color: ${({ theme }) => theme.palette.text.fourth};
      margin-bottom: 0.625rem;
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
    }
  }

  .delete-item-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0.5rem;

    &:hover {
      background-color: ${({ theme }) => theme.palette.background.lightPaper};

      .icon {
        color: ${({ theme }) => theme.buttons.danger.background};
      }
    }

    .icon {
      color: ${({ theme }) => theme.palette.text.fourth};
      height: 1.25rem;
      width: 1.25rem;
    }
  }
`;

export default InvoiceFormItem;

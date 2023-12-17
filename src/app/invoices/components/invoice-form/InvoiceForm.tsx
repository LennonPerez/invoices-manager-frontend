import { FunctionComponent } from "react";
import styled from "styled-components";
import { Invoice } from "@/types/invoice";
import { paymentTermsOptions } from "@/utils/options";
import { Input, InputSelect, InputDatePicker } from "@/components/inputs";
import { SecondaryButton } from "@/components/buttons";
import InvoiceFormItem from "./InvoiceFormItem";

interface InvoiceFormProps {
  invoice: Invoice | undefined;
}

const InvoiceForm: FunctionComponent<InvoiceFormProps> = ({ invoice }) => {
  const isEditing = !!invoice?.id;

  return (
    <InvoiceFormStyles>
      <div className="section">
        <h3>Bill From</h3>
        <Input label="Street Address" />
        <Divider />
        <div className="row">
          <Input label="City" />
          <Input label="Post Code" />
          <div className="country-input">
            <Input label="Country" />
          </div>
        </div>
        <Divider />
        <div className="country-input">
          <Input label="Country" />
        </div>
      </div>
      <div className="section">
        <h3>Bill To</h3>
        <Input label="Client's Name" />
        <Divider />
        <Input label="Client's Email" />
        <Divider />
        <Input label="Street Address" />
        <Divider />
        <div className="row">
          <Input label="City" />
          <Input label="Post Code" />
          <div className="country-input">
            <Input label="Country" />
          </div>
        </div>
        <Divider />
        <div className="country-input">
          <Input label="Country" />
        </div>
      </div>
      <div className="section last">
        <div className="row date-terms-row">
          <InputDatePicker label="Invoice Date" disabled={isEditing} />
          <InputSelect label="Payment Terms" options={paymentTermsOptions} />
        </div>
        <div className="date-terms-column">
          <InputDatePicker label="Invoice Date" disabled={isEditing} />
          <Divider />
          <InputSelect label="Payment Terms" options={paymentTermsOptions} />
        </div>
        <Divider />
        <Input label="Project / Description" />
      </div>
      <div className="items-list-container">
        <h2>Item List</h2>
        <InvoiceFormItem />
      </div>
      <div className="new-item-button">
        <SecondaryButton width="100%">+ Add New Item</SecondaryButton>
      </div>
    </InvoiceFormStyles>
  );
};

const InvoiceFormStyles = styled.div`
  h3 {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .section {
    margin-bottom: 3rem;

    .country-input {
      @media (min-width: 768px) {
        display: none;
      }
    }

    .row {
      display: flex;
      gap: 1.5rem;

      .country-input {
        display: none;

        @media (min-width: 768px) {
          display: block;
        }
      }
    }

    .date-terms-row {
      display: none;

      @media (min-width: 768px) {
        display: flex;
      }
    }

    .date-terms-column {
      @media (min-width: 768px) {
        display: none;

        .input {
          width: 50%;
        }
      }
    }
  }

  .last {
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .items-list-container {
    margin-top: 4rem;

    @media (min-width: 768px) {
      margin-top: 1.5rem;
    }

    h2 {
      color: ${({ theme }) => theme.palette.text.tertiary};
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 2rem;
      letter-spacing: -0.02344rem;
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        margin-bottom: 1rem;
      }
    }

    .new-item-button {
      width: 100%;
    }
  }
`;

const Divider = () => {
  return <div style={{ margin: "1.5rem" }} />;
};

export default InvoiceForm;

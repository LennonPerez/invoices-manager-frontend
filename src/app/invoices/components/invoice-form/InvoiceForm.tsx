import { FunctionComponent } from "react";
import styled from "styled-components";
import { Invoice } from "@/types/invoice";
import { paymentTermsOptions } from "@/utils/options";
import { BaseInput, InputSelect, InputDatePicker } from "@/components/inputs";
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
        <BaseInput label="Street Address" />
        <Divider />
        <div className="row">
          <BaseInput label="City" />
          <BaseInput label="Post Code" />
          <div className="country-input">
            <BaseInput label="Country" />
          </div>
        </div>
        <Divider />
        <div className="country-input">
          <BaseInput label="Country" />
        </div>
      </div>
      <div className="section">
        <h3>Bill To</h3>
        <BaseInput label="Client's Name" />
        <Divider />
        <BaseInput label="Client's Email" />
        <Divider />
        <BaseInput label="Street Address" />
        <Divider />
        <div className="row">
          <BaseInput label="City" />
          <BaseInput label="Post Code" />
          <div className="country-input">
            <BaseInput label="Country" />
          </div>
        </div>
        <Divider />
        <div className="country-input">
          <BaseInput label="Country" />
        </div>
      </div>
      <div className="section last">
        <div className="row date-terms-row">
          <InputDatePicker label="Invoice Date" isDisabled={isEditing} />
          <InputSelect label="Payment Terms" options={paymentTermsOptions} />
        </div>
        <div className="date-terms-column">
          <InputDatePicker label="Invoice Date" isDisabled={isEditing} />
          <Divider />
          <InputSelect label="Payment Terms" options={paymentTermsOptions} />
        </div>
        <Divider />
        <BaseInput label="Project / Description" />
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

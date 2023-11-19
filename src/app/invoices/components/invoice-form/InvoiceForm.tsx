import BaseInput from "@/components/Input";
import styled from "styled-components";
import InputDatePicker from "@/components/InputDatePicker";
import InputSelect from "@/components/InputSelect";
import { paymentTermsOptions } from "@/utils/options";
import { FunctionComponent } from "react";
import { SecondaryButton } from "@/components/Button";
import InvoiceFormItem from "./InvoiceFormItem";
import { Invoice } from "@/types/invoice";

interface InvoiceFormProps {
  invoice: Invoice | undefined;
}

const InvoiceForm: FunctionComponent<InvoiceFormProps> = ({ invoice }) => {
  const isEditing = invoice !== undefined;

  return (
    <InvoiceFormStyles>
      <div className="section">
        <h3>Bill From</h3>
        <BaseInput label="Street Address" />
        <Divider />
        <div className="row">
          <BaseInput label="City" />
          <BaseInput label="Post Code" />
        </div>
        <Divider />
        <BaseInput label="Country" />
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
        </div>
        <Divider />
        <BaseInput label="Country" />
      </div>
      <div className="section">
        <InputDatePicker label="Invoice Date" isDisabled={isEditing} />
        <Divider />
        <InputSelect label="Payment Terms" options={paymentTermsOptions} />
        <Divider />
        <BaseInput label="Project / Description" />
      </div>
      <div className="items-list-container">
        <h2>Item List</h2>
        <InvoiceFormItem />
        <InvoiceFormItem />
      </div>
      <div className="new-item-button">
        <SecondaryButton $width="100%">+ Add New Item</SecondaryButton>
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

    .row {
      display: flex;
      gap: 1.5rem;
    }
  }

  .items-list-container {
    margin-top: 4rem;

    h2 {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 2rem;
      letter-spacing: -0.02344rem;
      margin-bottom: 2rem;
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

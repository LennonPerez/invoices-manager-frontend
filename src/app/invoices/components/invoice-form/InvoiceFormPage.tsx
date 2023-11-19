import { FunctionComponent } from "react";
import styled from "styled-components";
import BackButton from "../shared/BackButton";
import InvoiceForm from "./InvoiceForm";
import InvoiceFormButtons from "./InvoiceFormButtons";
import invoices from "@/mocks/invoices";

interface InvoiceFormPageProps {
  onClose: () => void;
}

const InvoiceFormPage: FunctionComponent<InvoiceFormPageProps> = (props) => {
  const invoice = invoices[1];
  const isEditing = true;

  return (
    <InvoiceFormPageStyles>
      <div className="page-content">
        <div className="back-button-container">
          <BackButton onClick={props.onClose} />
        </div>
        {isEditing ? (
          <h1 className="title">
            Edit <span className="hash">#</span>XM9141
          </h1>
        ) : (
          <h1 className="title">New Invoice</h1>
        )}
        <InvoiceForm invoice={invoice} />
      </div>
      <InvoiceFormButtons isLoadingAction={false} isEditing={isEditing} />
    </InvoiceFormPageStyles>
  );
};

const InvoiceFormPageStyles = styled.div`
  background-color: ${({ theme }) => theme.page.background};
  position: fixed;
  top: 4.5rem;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  overflow-y: auto;

  .page-content {
    padding: 2rem 1.5rem;
    margin-bottom: 4rem;

    .back-button-container {
      margin-bottom: 1.5rem;
    }
  }

  .title,
  .hash {
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: -0.03125rem;
    margin-bottom: 1.5rem;

    span {
      font-weight: 700;
      color: ${({ theme }) => theme.palette.text.disabled};
    }
  }
`;

export default InvoiceFormPage;

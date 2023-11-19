import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import BackButton from "../shared/BackButton";
import InvoiceForm from "./InvoiceForm";
import InvoiceFormButtons from "./InvoiceFormButtons";
import invoices from "@/mocks/invoices";

interface InvoiceFormPageProps {
  onClose: () => void;
}

const InvoiceFormPage: FunctionComponent<InvoiceFormPageProps> = (props) => {
  const [show, setShow] = useState(false);

  const invoice = invoices[1];
  const isEditing = true;

  useEffect(() => {
    setShow(true);
  }, []);

  const onClose = () => {
    setShow(false);
    setTimeout(props.onClose, 300);
  };

  return (
    <InvoiceFormPageStyles $show={show}>
      <form>
        <div className="form-content">
          <div className="back-button-container">
            <BackButton onClick={onClose} />
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
      </form>
    </InvoiceFormPageStyles>
  );
};

const InvoiceFormPageStyles = styled.div<{ $show: boolean }>`
  background-color: ${({ theme }) => theme.page.background};
  position: fixed;
  top: ${({ $show }) => ($show ? "4.5rem" : "100vh")};
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  overflow-y: auto;
  transition: top 0.3s ease-in-out;

  .form-content {
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

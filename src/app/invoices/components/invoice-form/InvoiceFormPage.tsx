/* eslint-disable react-hooks/exhaustive-deps */
import { Invoice } from "@/types/invoice";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BackButton from "../shared/BackButton";
import InvoiceForm from "./InvoiceForm";
import InvoiceFormButtons from "./InvoiceFormButtons";

interface InvoiceFormPageProps {
  isOpen: boolean;
  invoiceToEdit?: Invoice | undefined;
  onClose: () => void;
  onDraft?: () => void;
  onSave: () => void;
}

const InvoiceFormPage: FunctionComponent<InvoiceFormPageProps> = ({
  isOpen,
  invoiceToEdit,
  onClose,
  onDraft,
  onSave,
}) => {
  const formRef = useRef<HTMLDivElement>(null);
  const [render, setRender] = useState(false);
  const [show, setShow] = useState(false);

  const isEditing = !!invoiceToEdit?.id;

  useEffect(() => {
    if (isOpen) {
      setRender(true);
      setTimeout(() => {
        setShow(true);
      }, 50);
      formRef?.current?.scrollTo({ top: 0 });
    } else {
      goBack();
    }
  }, [isOpen]);

  const goBack = () => {
    setShow(false);
    setTimeout(onClose, 300);
  };

  if (!render) return null;

  return (
    <InvoiceFormPageStyles $show={show} ref={formRef}>
      <form>
        <div className="form-content">
          <div className="back-button-container">
            <BackButton onClick={goBack} />
          </div>
          {isEditing ? (
            <h1 className="title">
              Edit <span className="hash">#</span>
              {invoiceToEdit?.id}
            </h1>
          ) : (
            <h1 className="title">New Invoice</h1>
          )}
          <InvoiceForm invoice={invoiceToEdit} />
        </div>
        <InvoiceFormButtons
          isEditing={isEditing}
          isLoadingAction={false}
          onCancel={onClose}
          onDraft={onDraft}
          onSave={onSave}
        />
      </form>
    </InvoiceFormPageStyles>
  );
};

interface InvoiceFormPageStylesProps {
  $show: boolean;
}

const InvoiceFormPageStyles = styled.div<InvoiceFormPageStylesProps>`
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
      color: ${({ theme }) => theme.palette.text.fourth};
      font-weight: 700;
    }
  }
`;

export default InvoiceFormPage;

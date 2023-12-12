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
      setRender(false);
    }
  }, [isOpen]);

  const goBack = () => {
    setShow(false);
    setTimeout(onClose, 300);
  };

  if (!render) return null;

  return (
    <InvoiceFormPageStyles ref={formRef} $show={show}>
      <div className="form-container">
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
            onCancel={goBack}
            onDraft={onDraft}
            onSave={onSave}
          />
        </form>
      </div>
      <div className="overlay" onClick={goBack} />
    </InvoiceFormPageStyles>
  );
};

interface InvoiceFormPageStylesProps {
  $show: boolean;
}

const InvoiceFormPageStyles = styled.div<InvoiceFormPageStylesProps>`
  .form-container,
  form {
    background-color: ${({ theme }) => theme.form.background};
    top: ${({ $show }) => ($show ? "4.5rem" : "100vh")};
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 5;
    transition: top 0.3s ease-in-out;

    @media (min-width: 768px) {
      top: 5rem;
      transition: right 0.3s ease-in-out;
      border-radius: 0px 20px 20px 0px;
    }
  }

  @media (min-width: 768px) {
    .form-container {
      right: ${({ $show }) => ($show ? "calc(20vw - 1rem)" : "100vw")};
    }
  }

  form {
    max-height: calc(100vh - 4.5rem);
    overflow-y: auto;

    @media (min-width: 768px) {
      right: ${({ $show }) => ($show ? "20vw" : "100vw")};

      scrollbar-base-color: #000;

      &::-webkit-scrollbar {
        background-color: ${({ theme }) => theme.form.background};
      }

      &::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.form.background};
      }

      &::-webkit-scrollbar-button:start {
        display: block;
      }

      &::-webkit-scrollbar-button:end {
        display: block;
      }
    }

    .form-content {
      padding: 2rem 1.5rem;
      margin-bottom: 4rem;

      @media (min-width: 768px) {
        padding: 3.5rem 2.5rem 1rem 3.5rem;
        margin-bottom: 0;
      }

      .back-button-container {
        margin-bottom: 1.5rem;

        @media (min-width: 768px) {
          display: none;
        }
      }
    }

    .title,
    .hash {
      font-size: 1.5rem;
      line-height: 2rem;
      letter-spacing: -0.03125rem;
      margin-bottom: 1.5rem;

      @media (min-width: 768px) {
        margin-bottom: 3rem;
      }

      span {
        color: ${({ theme }) => theme.palette.text.fourth};
        font-weight: 700;
      }
    }
  }

  .overlay {
    opacity: ${({ $show }) => ($show ? "0.5" : "0")};
    background-color: #000;
    transition: opacity 0.3s ease-in-out;
    display: none;
    position: fixed;
    top: 5rem;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 4;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export default InvoiceFormPage;

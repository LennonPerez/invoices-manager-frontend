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
      <form className="form-container">
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
          <InvoiceForm invoiceToEdit={invoiceToEdit} />
        </div>
        <InvoiceFormButtons
          isEditing={isEditing}
          isLoadingAction={false}
          onCancel={goBack}
          onDraft={onDraft}
          onSave={onSave}
        />
      </form>
      <div className="overlay" onClick={goBack} />
    </InvoiceFormPageStyles>
  );
};

interface InvoiceFormPageStylesProps {
  $show: boolean;
}

const InvoiceFormPageStyles = styled.div<InvoiceFormPageStylesProps>`
  .form-container {
    background-color: ${({ theme }) => theme.form.background};
    transform: translateY(${({ $show }) => ($show ? "0" : "100vh")});
    max-width: 38.5rem;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 5;
    transition: transform 0.3s ease-in-out;
    max-height: calc(100vh - 4.5rem);
    overflow-y: auto;

    @media (min-width: 768px) {
      transform: translateX(${({ $show }) => ($show ? "0" : "-200vw")});
      border-radius: 0px 20px 20px 0px;

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

    @media (min-width: 1440px) {
      max-height: 100vh;
      max-width: 44.9375rem;
      padding-left: 6.43rem;
    }

    .form-content {
      padding: 2rem 1.5rem;
      margin-bottom: 4rem;

      @media (min-width: 768px) {
        padding: 3.5rem 3.5rem 1rem 3.5rem;
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

    @media (min-width: 1440px) {
      top: 0;
      left: 6.43rem;
    }
  }
`;

export default InvoiceFormPage;

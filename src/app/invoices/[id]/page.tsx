"use client";

import { FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import InvoiceDetailsView from "./components/InvoiceDetailsView";
import InvoiceDetailsMobileCTAs from "./components/InvoiceDetailsMobileCTAs";
import BackButton from "../components/shared/BackButton";
import InvoiceFormPage from "../components/invoice-form/InvoiceFormPage";
import { ConfirmationModal } from "@/components/modals";
import useInvoiceState from "./hooks/useInvoiceState";
import useInvoiceConfirm from "./hooks/useInvoiceConfirm";
import useInvoiceFormEdit from "./hooks/useInvoiceFormEdit";

const InvoiceDetailsPage: FunctionComponent<InvoiceDetailsPageProps> = ({
  params,
}) => {
  const router = useRouter();

  const invoiceID = params.id;
  const { isFormOpen, openForm, closeForm } = useInvoiceFormEdit();
  const { invoice, isFetching } = useInvoiceState(invoiceID);
  const { confirmModalData, showDeleteConfirmation } =
    useInvoiceConfirm(invoiceID);

  const onTapDelete = () => showDeleteConfirmation();

  const onTapEdit = () => openForm();

  const onTapPaid = () => {};

  const onTapPending = () => {};

  const onCloseForm = () => closeForm();

  const onSaveFormChanges = () => {
    //TODO: on save form func
    onCloseForm();
  };

  return (
    <InvoiceDetailsPageStyles id="invoice-details-page">
      <div className="back-button-container">
        <BackButton onClick={router.back} />
      </div>
      <InvoiceDetailsView
        invoice={invoice}
        isLoading={isFetching}
        error={undefined}
      />
      <InvoiceDetailsMobileCTAs
        isInitialLoading={false}
        isLoadingAction={isFetching}
        showDeleteButton={true}
        showEditButton={invoice?.status !== "paid"}
        showMarkAsPaidButton={invoice?.status === "pending"}
        showMarkAsPendingButton={invoice?.status === "draft"}
        onTapDelete={onTapDelete}
        onTapEdit={onTapEdit}
        onTapPaid={onTapPaid}
        onTapPending={onTapPending}
      />
      <InvoiceFormPage
        isOpen={isFormOpen}
        invoiceToEdit={invoice}
        onClose={onCloseForm}
        onSave={onSaveFormChanges}
      />
      <ConfirmationModal {...confirmModalData} />
    </InvoiceDetailsPageStyles>
  );
};

const InvoiceDetailsPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem 9.5rem 1.5rem;
  max-height: calc(100vh - 4.5rem);
  overflow-y: auto;

  @media (min-width: 768px) {
    padding: 3rem 2.5rem;
    max-height: calc(100vh - 5rem);
  }

  @media (min-width: 1440px) {
    padding: 4rem;
    max-height: 100vh;
  }

  .back-button-container {
    display: flex;
    justify-content: start;
    width: 100%;
    max-width: 45.625rem;
    margin-bottom: 1.85rem;

    @media (min-width: 768px) {
      margin-bottom: 2rem;
    }
  }
`;

interface InvoiceDetailsPageProps {
  params: {
    id: string;
  };
}

export default InvoiceDetailsPage;

"use client";

import { FunctionComponent, useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import InvoiceDetailsView from "./components/InvoiceDetailsView";
import InvoiceDetailsMobileCTAs from "./components/InvoiceDetailsMobileCTAs";
import BackButton from "../components/shared/BackButton";
import InvoiceFormPage from "../components/invoice-form/InvoiceFormPage";
import { ConfirmationModal } from "@/components/modals";
import invoices from "@/mocks/invoices";

const InvoiceDetailsPage: FunctionComponent<InvoiceDetailsPageProps> = ({
  params,
}) => {
  const router = useRouter();
  const [modalInfo, setModalInfo] = useState<ModalInfo>(modalInfoInital);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const invoice = invoices.find((e) => e.id === params.id);
  const isFetching = false;

  const onTapDelete = () => {
    const info = {
      title: "Confirm Deletion",
      description: `Are you sure you want to delete invoice #${invoice?.id}? This action cannot be undone.`,
      confirmButtonText: "Delete",
      isDanger: true,
      onCancel: () => setModalInfo({ isOpen: false, ...info }),
    };

    setModalInfo({
      ...info,
      isOpen: true,
      onConfirm: () => {
        // TODO: DELETE func
        info.onCancel();
      },
    });
  };

  const onTapEdit = () => setIsFormOpen(true);

  const onTapPaid = () => {};

  const onTapPending = () => {};

  const onCloseForm = () => setIsFormOpen(false);

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
      <ConfirmationModal
        {...modalInfo}
        onCancel={modalInfo.onCancel ?? (() => setModalInfo(modalInfoInital))}
      />
    </InvoiceDetailsPageStyles>
  );
};

const InvoiceDetailsPageStyles = styled.div`
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
    display: flex;
    flex-direction: column;
    align-items: center;
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

interface ModalInfo {
  isOpen: boolean;
  title: string;
  description: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  isDanger?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const modalInfoInital: ModalInfo = {
  isOpen: false,
  title: "",
  description: "",
  isDanger: false,
};

export default InvoiceDetailsPage;

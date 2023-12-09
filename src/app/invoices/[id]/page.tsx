"use client";

import { FunctionComponent, useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import invoices from "@/mocks/invoices";
import InvoiceDetails from "./components/InvoiceDetails";
import InvoiceDetailsMobileCTAs from "./components/InvoiceDetailsMobileCTAs";
import BackButton from "../components/shared/BackButton";
import { ConfirmationModal } from "@/components/modals";

const InvoiceDetailsPage: FunctionComponent<InvoiceDetailsPageProps> = ({
  params,
}) => {
  console.log(params.id);
  const router = useRouter();
  const [modalInfo, setModalInfo] = useState<ModalInfo>(modalInfoInital);

  const invoice = invoices[1];
  const isFetching = false;

  const onTapDelete = () => {
    const info = {
      title: "Confirm Deletion",
      description: `Are you sure you want to delete invoice #${invoice.id}? This action cannot be undone.`,
      confirmButtonText: "Delete",
      isDanger: true,
      onCancel: () => setModalInfo({ isOpen: false, ...info }),
    };

    setModalInfo({
      ...info,
      isOpen: true,
      onConfirm: () => {
        console.log("DELETING");
        info.onCancel();
      },
    });
  };

  const onTapEdit = () => {};

  const onTapPaid = () => {};

  const onTapPending = () => {};

  return (
    <InvoiceDetailsPageStyles id="invoice-details-page">
      <div className="back-button-container">
        <BackButton onClick={router.back} />
      </div>
      <InvoiceDetails
        invoice={invoice}
        isFetching={isFetching}
        error={undefined}
      />
      <InvoiceDetailsMobileCTAs
        isInitialLoading={false}
        isLoadingAction={isFetching}
        showDeleteButton={true}
        showEditButton={invoice.status !== "paid"}
        showMarkAsPaidButton={invoice.status === "pending"}
        showMarkAsPendingButton={invoice.status === "draft"}
        onTapDelete={onTapDelete}
        onTapEdit={onTapEdit}
        onTapPaid={onTapPaid}
        onTapPending={onTapPending}
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

  .back-button-container {
    margin-bottom: 1.85rem;
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

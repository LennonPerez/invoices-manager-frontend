import useConfirmModal from "@/hooks/useConfirmModal";

const useInvoiceConfirm = (invoiceID: string) => {
  const { confirmModalData, openConfirmModal, closeConfirmModal } =
    useConfirmModal();

  const showDeleteConfirmation = () => {
    const info = {
      title: "Confirm Deletion",
      description: `Are you sure you want to delete invoice #${invoiceID}? This action cannot be undone.`,
      confirmButtonText: "Delete",
      isDanger: true,
    };

    const onCancel = () => closeConfirmModal(info);
    const onConfirm = () => {
      // TODO: DELETE func
      onCancel();
    };

    openConfirmModal({
      ...info,
      onCancel,
      onConfirm,
    });
  };

  return { confirmModalData, showDeleteConfirmation };
};

export default useInvoiceConfirm;

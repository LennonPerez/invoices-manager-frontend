import { useState } from "react";

interface ConfirmModalData {
  title: string;
  description: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  isDanger?: boolean;
  isOpen?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const initialModalData: ConfirmModalData = {
  title: "",
  description: "",
};

const useConfirmModal = () => {
  const [confirmModalData, setModalData] =
    useState<ConfirmModalData>(initialModalData);

  const openConfirmModal = (data: ConfirmModalData) => {
    setModalData({ ...data, isOpen: true });
  };

  const closeConfirmModal = (data: ConfirmModalData) => {
    setModalData({ ...data, isOpen: false });
  };

  return {
    confirmModalData,
    openConfirmModal,
    closeConfirmModal,
  };
};

export default useConfirmModal;

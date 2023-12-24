import { useState } from "react";

const useNewInvoiceForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const onSaveFormAsDraft = () => {
    //TODO: on save form draft func
    closeForm();
  };

  const onSaveForm = () => {
    //TODO: on save form func
    closeForm();
  };

  return {
    isFormOpen,
    openForm,
    closeForm,
    onSaveForm,
    onSaveFormAsDraft,
  };
};

export default useNewInvoiceForm;

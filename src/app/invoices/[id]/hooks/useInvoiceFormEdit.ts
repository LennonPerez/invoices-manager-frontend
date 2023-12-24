import { useState } from "react";
import { Invoice } from "@/types/invoice";

const useInvoiceFormEdit = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const saveFormChanges = (invoice: Invoice) => {
    console.log(invoice);
  };

  return { isFormOpen, openForm, closeForm, saveFormChanges };
};

export default useInvoiceFormEdit;

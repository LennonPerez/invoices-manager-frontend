"use client";

import { useState } from "react";
import styled from "styled-components";
import InvoicesPageHeader from "./components/InvoicesHeader";
import InvoicesList from "./components/InvoicesList";
import InvoiceFormPage from "../components/invoice-form/InvoiceFormPage";
import invoices from "@/mocks/invoices";

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const onOpenForm = () => {
    setIsFormOpen(true);
  };

  const onCloseForm = () => {
    setIsFormOpen(false);
  };

  const onSaveFormAsDraft = () => {
    //TODO: on save form draft func
    onCloseForm();
  };

  const onSaveForm = () => {
    //TODO: on save form func
    onCloseForm();
  };

  return (
    <HomePageStyles>
      <div className="header-container">
        <InvoicesPageHeader onOpenForm={onOpenForm} />
      </div>
      <InvoicesList
        invoices={invoices}
        isFetchingInvoices={false}
        isFetchingMoreInvoices={false}
      />
      <InvoiceFormPage
        isOpen={isFormOpen}
        onClose={onCloseForm}
        onSave={onSaveForm}
        onDraft={onSaveFormAsDraft}
      />
    </HomePageStyles>
  );
};

const HomePageStyles = styled.main`
  padding: 2.25rem 1.5rem;
  max-height: calc(100vh - 4.5rem);
  overflow-y: auto;

  .header-container {
    margin-bottom: 2.25rem;
  }
`;

export default Home;

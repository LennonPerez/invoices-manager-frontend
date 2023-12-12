"use client";

import { useState } from "react";
import styled from "styled-components";
import InvoicesPageHeader from "./components/InvoicesHeader";
import InvoicesListView from "./components/InvoicesListView";
import InvoiceFormPage from "../components/invoice-form/InvoiceFormPage";
import invoices from "@/mocks/invoices";

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const isFetching = false;
  const isFetchingMore = false;

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
        <InvoicesPageHeader invoicesQuantity={7} onOpenForm={onOpenForm} />
      </div>
      <InvoicesListView
        invoices={invoices}
        isLoading={isFetching}
        isLoadingMore={isFetchingMore}
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

  @media (min-width: 768px) {
    padding: 3.5rem 3rem;
    max-height: calc(100vh - 5rem);
  }

  @media (min-width: 1440px) {
    padding: 4.5rem;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header-container {
    margin-bottom: 2.25rem;
    max-width: 45.625rem;

    @media (min-width: 768px) {
      margin-bottom: 3.5rem;
    }

    @media (min-width: 1440px) {
      margin-bottom: 4.5rem;
      width: 100%;
    }
  }
`;

export default Home;

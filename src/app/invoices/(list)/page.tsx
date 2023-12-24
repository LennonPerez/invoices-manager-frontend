"use client";

import styled from "styled-components";
import InvoicesPageHeader from "./components/InvoicesHeader";
import InvoicesListView from "./components/InvoicesListView";
import InvoiceFormPage from "../components/invoice-form/InvoiceFormPage";
import useInvoicesState from "./hooks/useInvoicesState";
import useInvoiceForm from "./hooks/useInvoiceForm";

const Home = () => {
  const { invoices, isFetching } = useInvoicesState();
  const { isFormOpen, openForm, closeForm, onSaveForm, onSaveFormAsDraft } =
    useInvoiceForm();

  return (
    <HomePageStyles>
      <div className="header-container">
        <InvoicesPageHeader
          invoicesQuantity={invoices?.length ?? 0}
          isLoading={isFetching}
          onOpenForm={openForm}
        />
      </div>
      <InvoicesListView
        invoices={invoices}
        isLoading={isFetching}
        isLoadingMore={false}
      />
      <InvoiceFormPage
        isOpen={isFormOpen}
        onClose={closeForm}
        onSave={onSaveForm}
        onDraft={onSaveFormAsDraft}
      />
    </HomePageStyles>
  );
};

const HomePageStyles = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  }

  .header-container {
    margin-bottom: 2.25rem;
    max-width: 45.625rem;
    width: 100%;

    @media (min-width: 768px) {
      margin-bottom: 3.5rem;
    }

    @media (min-width: 1440px) {
      margin-bottom: 4.5rem;
    }
  }
`;

export default Home;

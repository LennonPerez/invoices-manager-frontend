"use client";

import styled from "styled-components";
import InvoicesPageHeader from "@/app/invoices/(list)/components/InvoicesHeader";
import InvoicesList from "@/app/invoices/(list)/components/InvoicesList";
import invoices from "@/mocks/invoices";

const Home = () => {
  return (
    <HomePageStyles>
      <div className="header-container">
        <InvoicesPageHeader />
      </div>
      <InvoicesList
        invoices={invoices}
        isFetchingInvoices={false}
        isFetchingMoreInvoices={false}
      />
    </HomePageStyles>
  );
};

const HomePageStyles = styled.main`
  padding: 2.25rem 1.5rem;

  .header-container {
    margin-bottom: 2.25rem;
  }
`;

export default Home;

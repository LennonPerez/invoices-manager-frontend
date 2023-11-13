'use client'

import styled from "styled-components";
import InvoicesPageHeader from "@/app/components/InvoicesHeader";
import InvoicesList from "@/app/components/InvoicesList";
import invoices from "@/mocks/invoices"

export default function Home() {
  return (
    <HomePageStyles>
      <div className="header-container">
        <InvoicesPageHeader />
      </div>
      <InvoicesList invoices={invoices} isFetchingInvoices={false} isFetchingMoreInvoices={false} />
    </HomePageStyles>
  )
}

const HomePageStyles = styled.main`
  .header-container{
    margin-bottom: 2.25rem;
  }
`

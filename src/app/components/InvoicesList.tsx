import { FunctionComponent, memo } from "react";
import Image from "next/image";
import { Invoice } from "@/types/invoice";
import styled from "styled-components";
import InvoiceCard from '@/app/components/invoiceCard';
import InvoiceCardLoader from './InvoiceCardLoader';
import { generateIDs } from "@/utils/generators";

interface InvoicesListProps {
    invoices: Invoice[],
    isFetchingInvoices: boolean,
    isFetchingMoreInvoices: boolean,
}

const InvoicesList: FunctionComponent<InvoicesListProps> = ({ invoices, isFetchingInvoices, isFetchingMoreInvoices }) => {
    if (isFetchingInvoices) {
        const loaders = generateIDs(10);

        return (
            <InvoicesListStyles>
                {loaders.map(e =>
                    <div key={e} className="invoice-card">
                        <InvoiceCardLoader />
                    </div>
                )}
            </InvoicesListStyles>
        )
    }

    if (invoices.length === 0) {
        return <InvoicesEmptyState />
    }

    const invoicesParsed = invoices.map(invoice => ({
        ...invoice,
        createdAt: new Date(invoice.createdAt),
        paymentDue: new Date(invoice.paymentDue),
    }));

    return (
        <InvoicesListStyles>
            {invoicesParsed.map(e =>
                <div key={e.id} className="invoice-card">
                    <InvoiceCard
                        id={e.id}
                        clientName={e.clientName}
                        date={e.createdAt}
                        amount={e.total}
                        status={e.status}
                        onClick={() => { console.log(`Go to invoice ${e.id}`) }}
                    />
                </div>
            )}
        </InvoicesListStyles>
    );
}

const InvoicesEmptyState = () => {
    return (
        <InvoicesEmptyStateSyles>
            <div className="empty-state-image">
                <Image src="/images/invoices-empty-state.svg" alt="empty-state" fill />
            </div>
            <h2 className="empty-state-title">There is nothing here</h2>
            <p className="empty-state-description">Create an invoice by clicking the <span>New</span> button and get started</p>
        </InvoicesEmptyStateSyles>
    )
}

const InvoicesListStyles = styled.div`
    display: flex;
    flex-direction: column;

    .invoice-card{
      margin-bottom: 1rem;
    }
`

const InvoicesEmptyStateSyles = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 13.56rem;
      padding-top: 4rem; // TODO: kill this, this must be centered by container height
      margin: 0 auto;
      
      .empty-state-image{
        position: relative;
        width: 12rem;
        height: 10rem;
        margin-bottom: 2.25rem;
      }

      .empty-state-title{
        font-size: 1.25rem;
        text-align: center;
        margin-bottom: 1.5rem;
      }

      .empty-state-description{
        text-align: center;
        
        span{
          font-weight: 700;
        }
      }
`

export default memo(InvoicesList);
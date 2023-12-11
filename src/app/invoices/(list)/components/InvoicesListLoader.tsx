import { FunctionComponent } from "react";
import styled from "styled-components";
import { generateIDs } from "@/utils/generators";
import InvoiceCardLoader from "./InvoiceCardLoader";

const InvoicesListLoader: FunctionComponent = () => {
  const loaders = generateIDs(10);

  return (
    <InvoicesListLoaderStyles>
      {loaders.map((e) => (
        <div key={e} className="invoice-card">
          <InvoiceCardLoader />
        </div>
      ))}
    </InvoicesListLoaderStyles>
  );
};

const InvoicesListLoaderStyles = styled.div`
  display: flex;
  flex-direction: column;

  .invoice-card {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default InvoicesListLoader;

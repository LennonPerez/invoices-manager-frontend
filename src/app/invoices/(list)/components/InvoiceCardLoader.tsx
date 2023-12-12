import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";
import useIsMobile from "@/hooks/useIsMobile";

const InvoiceCardLoader = () => {
  const isMobileSize = useIsMobile();

  if (isMobileSize) {
    return (
      <InvoiceCardLoaderStyles>
        <div className="top-row-container">
          <div className="invoice-id loader" />
          <div className="invoice-client-name loader" />
        </div>
        <div className="bottom-row-container">
          <div className="left-column">
            <div className="invoice-date loader" />
            <div className="invoice-amount loader" />
          </div>
          <div className="status-box loader" />
        </div>
      </InvoiceCardLoaderStyles>
    );
  }

  return (
    <InvoiceCardLoaderStyles>
      <div className="invoice-id loader" />
      <div className="invoice-date loader" />
      <div className="invoice-client-name loader" />
      <div className="invoice-amount loader" />
      <div className="right-column-container">
        <div className="status-box loader" />
        <FaChevronRight className="chevron-icon" />
      </div>
    </InvoiceCardLoaderStyles>
  );
};

const InvoiceCardLoaderStyles = styled.div`
  background: ${({ theme }) => theme.card.background};
  box-shadow: 0px 10px 10px -10px ${({ theme }) => theme.card.shadow};
  min-height: 8.37rem;
  width: 100%;
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 1.05rem 1.5rem;
    min-height: 4.5rem;
    display: grid;
    grid-template-rows: 1;
    grid-template-columns: 3.75rem 6.75rem repeat(3, 1fr);
    grid-column-gap: 1.5rem;
    align-items: center;
  }

  @media (min-width: 1440px) {
    padding: 1.05rem 1.5rem 1.05rem 2rem;
    grid-column-gap: 2.5rem;
  }

  .loader {
    border-radius: 0.25rem;
    animation: skeleton-loading 1s linear infinite alternate;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: ${({ theme }) => theme.palette.background.default};
    }
    100% {
      background-color: ${({ theme }) => theme.palette.background.lightPaper};
    }
  }

  .top-row-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bottom-row-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-column {
      display: flex;
      flex-direction: column;
    }
  }

  .right-column-container {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1.25rem;

    @media (min-width: 768px) {
      margin-left: 1rem;
    }
  }

  .invoice-id {
    height: 0.93rem;
    width: 3.75rem;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .invoice-client-name {
    height: 0.93rem;
    width: 5.56rem;
  }

  .invoice-date {
    height: 0.93rem;
    width: 6.62rem;
    margin-bottom: 0.75rem;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .invoice-amount {
    height: 1.5rem;
    width: 5.62rem;
  }

  .status-box {
    width: 6.5rem;
    height: 2.5rem;
    border-radius: 0.375rem;
  }

  .chevron-icon {
    width: 0.5rem;
    height: 1rem;
    animation: skeleton-loading-icon 1s linear infinite alternate;
  }

  @keyframes skeleton-loading-icon {
    0% {
      color: ${({ theme }) => theme.palette.background.default};
    }
    100% {
      color: ${({ theme }) => theme.palette.background.lightPaper};
    }
  }
`;

export default InvoiceCardLoader;

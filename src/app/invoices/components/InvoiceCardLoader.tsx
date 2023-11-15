import styled from "styled-components";

const InvoiceCardLoader = () => {
  return (
    <InvoiceCardLoaderStyles>
      <div className="top-row-container">
        <div className="invoice-id loader" />
        <div className="client-name loader" />
      </div>
      <div className="bottom-row-container">
        <div className="left-column">
          <div className="date loader" />
          <div className="amount loader" />
        </div>
        <div className="status-box loader" />
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

  .loader {
    /* background-color: ${({ theme }) =>
      theme.palette.background.lightPaper}; */
    border-radius: 0.25rem;
    animation: skeleton-loading 1s linear infinite alternate;
  }

  @keyframes skeleton-loading {
    0% {
      /* opacity: 0.6; */
      /* transform: scale(0.8); */
      background-color: ${({ theme }) => theme.palette.background.default};
    }
    100% {
      /* opacity: 1; */
      /* transform: scale(1); */
      background-color: ${({ theme }) => theme.palette.background.lightPaper};
    }
  }

  .top-row-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .invoice-id {
      height: 0.93rem;
      width: 3.75rem;
    }

    .client-name {
      height: 0.93rem;
      width: 5.56rem;
    }
  }

  .bottom-row-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-column {
      display: flex;
      flex-direction: column;

      .date {
        height: 0.93rem;
        width: 6.62rem;
        margin-bottom: 0.75rem;
      }

      .amount {
        height: 1.5rem;
        width: 5.62rem;
      }
    }

    .status-box {
      width: 6.5rem;
      height: 2.5rem;
      border-radius: 0.375rem;
    }
  }
`;

export default InvoiceCardLoader;

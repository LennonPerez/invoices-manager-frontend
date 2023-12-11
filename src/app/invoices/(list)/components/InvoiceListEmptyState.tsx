import Image from "next/image";
import styled from "styled-components";

const InvoicesEmptyState = () => {
  return (
    <InvoicesEmptyStateSyles>
      <div className="empty-state-image">
        <Image src="/images/invoices-empty-state.svg" alt="empty-state" fill />
      </div>
      <h2 className="empty-state-title">There is nothing here</h2>
      <p className="empty-state-description">
        Create an invoice by clicking the <span>New</span> button and get
        started
      </p>
    </InvoicesEmptyStateSyles>
  );
};

const InvoicesEmptyStateSyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 13.56rem;
  height: calc(100vh - 16rem);
  margin: 0 auto;

  @media (min-width: 768px) {
    height: calc(100vh - 20rem);
  }

  .empty-state-image {
    position: relative;
    width: 12rem;
    height: 10rem;
    margin-bottom: 2.25rem;

    @media (min-width: 768px) {
      width: 15rem;
      height: 12.5rem;
      margin-bottom: 4.5rem;
    }
  }

  .empty-state-title {
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .empty-state-description {
    text-align: center;

    span {
      font-weight: 700;
    }
  }
`;

export default InvoicesEmptyState;

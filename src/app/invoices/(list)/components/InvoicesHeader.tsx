"use client";

import styled from "styled-components";
import { HiPlusSm } from "react-icons/hi";
import { PrimaryButton } from "@/components/buttons";
import InvoicesFilter from "./InvoicesFilter";
import { FunctionComponent } from "react";

interface InvoicesPageHeaderProps {
  onOpenForm: () => void;
}

const InvoicesPageHeader: FunctionComponent<InvoicesPageHeaderProps> = ({
  onOpenForm,
}) => {
  return (
    <InvoicesListHeaderStyles>
      <div className="left-side">
        <h1 className="title">Invoices</h1>
        <p className="invoices-counter">7 invoices</p>
      </div>
      <div className="right-side">
        <InvoicesFilter />
        <PrimaryButton
          padding="0.25rem 1.25rem 0.25rem 0.5rem"
          onClick={onOpenForm}
        >
          <div className="plus-icon-container">
            <HiPlusSm className="plus-icon" />
          </div>
          New
        </PrimaryButton>
      </div>
    </InvoicesListHeaderStyles>
  );
};

const InvoicesListHeaderStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .left-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      font-size: 1.25rem;
    }
    .invoices-counter {
    }
  }

  .right-side {
    display: flex;
    align-items: center;

    .plus-icon-container {
      background-color: ${({ theme }) => theme.palette.common.white};
      height: 2rem;
      width: 2rem;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.5rem;

      .plus-icon {
        color: ${({ theme }) => theme.palette.primary.main};
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

export default InvoicesPageHeader;

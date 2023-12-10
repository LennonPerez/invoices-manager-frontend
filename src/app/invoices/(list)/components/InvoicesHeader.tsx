"use client";

import { FunctionComponent } from "react";
import styled from "styled-components";
import { HiPlusSm } from "react-icons/hi";
import { PrimaryButton } from "@/components/buttons";
import InvoicesFilter from "./InvoicesFilter";
import useIsMobile from "@/hooks/useIsMobile";

interface InvoicesPageHeaderProps {
  invoicesQuantity: number;
  onOpenForm: () => void;
}

const InvoicesPageHeader: FunctionComponent<InvoicesPageHeaderProps> = ({
  invoicesQuantity,
  onOpenForm,
}) => {
  const isMobileSize = useIsMobile();

  const invoicesQuantityMessage = isMobileSize
    ? `${invoicesQuantity} invoices`
    : `There are ${invoicesQuantity} total invoices`;

  return (
    <InvoicesListHeaderStyles>
      <div className="left-side">
        <h1 className="title">Invoices</h1>
        <p className="invoices-counter">{`${
          invoicesQuantity ? invoicesQuantityMessage : "No invoices"
        }`}</p>
      </div>
      <div className="right-side">
        <InvoicesFilter />
        <PrimaryButton
          padding="0.25rem 1.25rem 0.25rem 0.5rem"
          minHeight={isMobileSize ? undefined : "3rem"}
          onClick={onOpenForm}
        >
          <div className="plus-icon-container">
            <HiPlusSm className="plus-icon" />
          </div>
          {`${isMobileSize ? "New" : "New Invoice"}`}
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
    gap: 0.25rem;

    @media (min-width: 768px) {
      gap: 0.5rem;
    }

    .title {
      font-size: 1.25rem;

      @media (min-width: 768px) {
        font-size: 2rem;
      }
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

      @media (min-width: 768px) {
        margin-right: 1rem;
      }

      .plus-icon {
        color: ${({ theme }) => theme.palette.primary.main};
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

export default InvoicesPageHeader;

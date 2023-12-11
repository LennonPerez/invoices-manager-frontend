import { FunctionComponent } from "react";
import styled from "styled-components";
import useIsMobile from "@/hooks/useIsMobile";
import useScroll from "@/hooks/useScroll";
import InvoiceDetailsCTAs, {
  InvoiceDetailsCTAsProps,
} from "./InvoiceDetailsCTAs";

interface InvoiceDetailsMobileCTAsProps extends InvoiceDetailsCTAsProps {
  isInitialLoading: boolean;
}

const InvoiceDetailsMobileCTAs: FunctionComponent<
  InvoiceDetailsMobileCTAsProps
> = (props) => {
  const isMobileSize = useIsMobile();
  if (props.isInitialLoading || !isMobileSize) return null;

  return <InnerComponent {...props} />;
};

const InnerComponent: FunctionComponent<InvoiceDetailsMobileCTAsProps> = (
  props,
) => {
  const {
    document,
    currentY,
    scrollHeight,
    clientHeight,
    isScrollingDownwards,
  } = useScroll("invoice-details-page");

  const scrollPositionFromBottom = scrollHeight - currentY - clientHeight;

  const showCTAs =
    !isScrollingDownwards ||
    scrollPositionFromBottom <=
      4.5 * parseFloat(getComputedStyle(document).fontSize);

  return (
    <InvoiceDetailsMobileCTAsStyles $show={showCTAs}>
      <InvoiceDetailsCTAs {...props} />
    </InvoiceDetailsMobileCTAsStyles>
  );
};

const InvoiceDetailsMobileCTAsStyles = styled.div<{ $show: boolean }>`
  background-color: ${({ theme }) => theme.card.background};
  box-shadow: 0px 10px 10px -10px ${({ theme }) => theme.card.shadow};
  bottom: ${(props) => (props.$show ? "0" : "-6rem")};
  left: 0;
  right: 0;
  position: fixed;
  transition: bottom 0.3s ease-in-out;
  min-height: 5.6875rem;
  padding: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;

  .edit-button {
    width: 100%;
    max-width: 4.5625rem;
  }

  .delete-button {
    width: 100%;
    max-width: 5.5625rem;
  }

  .mark-as-paid-button {
    width: 100%;
    max-width: 9.3125rem;
  }

  .mark-as-pending-button {
    width: 100%;
    max-width: 9.3125rem;
  }
`;

export default InvoiceDetailsMobileCTAs;

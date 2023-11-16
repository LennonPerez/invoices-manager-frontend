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
  const scrollData = useScroll();

  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  const scrollPositionFromBottom =
    scrollHeight - scrollData.currentY - clientHeight;

  const showCTAs =
    !scrollData.isScrollingDownwards ||
    scrollPositionFromBottom <=
      4.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);

  return (
    <InvoiceDetailsMobileCTAsStyles $show={showCTAs}>
      <InvoiceDetailsCTAs {...props} />
    </InvoiceDetailsMobileCTAsStyles>
  );
};

const InvoiceDetailsMobileCTAsStyles = styled.div<{ $show: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: ${(props) => (props.$show ? "0" : "-6rem")};
  transition: bottom 0.3s ease-in-out;
`;

export default InvoiceDetailsMobileCTAs;

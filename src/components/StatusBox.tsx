import { FunctionComponent } from "react";
import styled from "styled-components";
import { InvoiceStatus } from "@/types/invoice";

interface StatusBoxProps {
  status: InvoiceStatus;
}

const StatusBox: FunctionComponent<StatusBoxProps> = ({ status }) => {
  return (
    <StatusBoxStyles $status={status}>
      <div className="opacity-background" />
      <div className="status-circle" />
      <h5 className="status-text">{status}</h5>
    </StatusBoxStyles>
  );
};

interface StatusBoxStylesProps {
  $status: InvoiceStatus;
}

const StatusBoxStyles = styled.div<StatusBoxStylesProps>`
  width: 6.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .opacity-background {
    background-color: ${(props) => props.theme.status[props.$status]};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.05;
  }

  .status-circle {
    background-color: ${(props) => props.theme.status[props.$status]};
    border-radius: 100%;
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.25rem;
  }

  .status-text {
    color: ${(props) => props.theme.status[props.$status]};
    text-transform: capitalize;
    font-size: 0.75rem;
  }
`;

export default StatusBox;

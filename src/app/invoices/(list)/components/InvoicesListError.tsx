import { FunctionComponent } from "react";

interface InvoicesListErrorProps {
  errorCode: string;
  errorMessage: string;
}

const InvoicesListError: FunctionComponent<InvoicesListErrorProps> = ({
  errorCode,
  errorMessage,
}) => {
  return (
    <>
      <p>{`Error code: ${errorCode}`}</p>;
      <p>{`Error message: ${errorMessage}`}</p>;
    </>
  );
};

export default InvoicesListError;

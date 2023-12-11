import { FunctionComponent } from "react";

interface InvoicesDetailsErrorProps {
  errorCode: string;
  errorMessage: string;
}

const InvoicesDetailsError: FunctionComponent<InvoicesDetailsErrorProps> = ({
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

export default InvoicesDetailsError;

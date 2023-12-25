import { getInvoiceByID } from "@/services/invoicesService";
import { useQuery } from "@tanstack/react-query";

const useInvoiceState = (invoiceID: string) => {
  const { data, isFetching } = useQuery({
    queryKey: ["invoices", "list", invoiceID],
    queryFn: () => getInvoiceByID(invoiceID),
  });

  const invoice = data?.code === "success" ? data.data : undefined;
  const error = data?.code === "error" ? data.error : undefined;

  return { invoice, isFetching, error };
};

export default useInvoiceState;

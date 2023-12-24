import { getInvoiceByID } from "@/services/invoicesSerivice";
import { useQuery } from "@tanstack/react-query";

const useInvoiceState = (invoiceID: string) => {
  const { data, isFetching } = useQuery({
    queryKey: ["invoices", "list", invoiceID],
    queryFn: () => getInvoiceByID(invoiceID),
  });

  const invoice = data?.code === "success" ? data.data : undefined;

  return { invoice, isFetching };
};

export default useInvoiceState;

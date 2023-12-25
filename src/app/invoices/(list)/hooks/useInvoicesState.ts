import { useQuery } from "@tanstack/react-query";
import { getAllInvoices } from "@/services/invoicesService";

const useInvoicesState = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["invoices", "list"],
    queryFn: getAllInvoices,
  });

  const invoices = data?.code === "success" ? data.data : null;
  const error = data?.code === "error" ? data.error : null;

  return { invoices, isFetching, error };
};

export default useInvoicesState;

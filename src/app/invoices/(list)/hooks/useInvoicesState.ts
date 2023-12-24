import { useQuery } from "@tanstack/react-query";
import { getAllInvoices } from "../../../../services/invoicesSerivice";

const useInvoicesState = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["invoices", "list"],
    queryFn: getAllInvoices,
  });

  const invoices = data?.code === "success" ? data.data : null;

  return { invoices, isFetching };
};

export default useInvoicesState;

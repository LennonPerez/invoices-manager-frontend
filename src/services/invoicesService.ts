import { Invoice } from "@/types/invoice";
import { doDelete, doGet, doPost, doPut } from "./requestHandler";

export const getAllInvoices = async () => {
  return doGet<Invoice[]>("/invoices");
};

export const getInvoiceByID = async (invoiceID: string) => {
  return doGet<Invoice>(`/invoices/${invoiceID}`);
};

export const createNewInvoice = async (invoice: Invoice) => {
  return doPost<Invoice>("/invoices", invoice);
};

export const editInvoiceByID = async (invoice: Invoice) => {
  return doPut<Invoice>(`/invoices/${invoice.id}`, invoice);
};

export const deleteInvoiceByID = async (invoiceID: string) => {
  return doDelete<{ message: string }>(`/invoices/${invoiceID}`);
};

import { SelectorOption } from "@/components/Selector";

export const paymentTermsOptions: SelectorOption[] = [
  {
    text: "Net 1 Day",
    value: "1",
  },
  {
    text: "Net 7 Day",
    value: "7",
  },
  {
    text: "Net 14 Day",
    value: "14",
  },
  {
    text: "Net 30 Day",
    value: "30",
  },
];

export const statusOptions: SelectorOption[] = [
  {
    text: "Draft",
    value: "draft",
  },
  {
    text: "Pending",
    value: "pending",
  },
  {
    text: "Paid",
    value: "paid",
  },
];

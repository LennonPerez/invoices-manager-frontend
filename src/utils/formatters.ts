export const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = formatMonth(date);
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export const formatMonth = (
  date: Date,
  format: "short" | "long" = "short",
): string => {
  return date.toLocaleString("default", { month: format });
};

export const formatMonthByIndex = (
  month: number,
  format: "short" | "long" = "short",
): string => {
  const date = new Date(2000, month, 0);
  return date.toLocaleString("default", { month: format });
};

export const formatAmount = (amount: number, showSymbol: boolean = true) => {
  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  });

  const formattedNumber = formatter.format(amount);

  if (showSymbol) {
    return formattedNumber;
  } else {
    return formattedNumber.replace(/£/, "").trim();
  }
};

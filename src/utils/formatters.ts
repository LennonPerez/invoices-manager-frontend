export const formatDate = (date: Date): string => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    const result = `${day} ${month} ${year}`;

    return result;
}

export const formatAmount = (amount: number, showSymbol: boolean = true) => {
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2,
    });

    const formattedNumber = formatter.format(amount);

    if (showSymbol) {
        return formattedNumber;
    } else {
        return formattedNumber.replace(/£/, '').trim();
    }
}
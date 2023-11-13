export type Invoice = {
    id: string;
    createdAt: string;
    paymentDue: string;
    description: string;
    paymentTerms: number;
    clientName: string;
    clientEmail: string;
    status: InvoiceStatus;
    senderAddress: InvoiceAddress;
    clientAddress: InvoiceAddress;
    items: InvoiceItem[];
    total: number;
};

export type InvoiceStatus = 'draft' | 'pending' | 'paid';

export type InvoiceAddress = {
    street: string;
    city: string;
    postCode: string;
    country: string;
};

export type InvoiceItem = {
    name: string;
    quantity: number;
    price: number;
    total: number;
};


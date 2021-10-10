export interface CreatePerson {
    dni: string;
    married: boolean;
    initialAmount: number;
    coupleDni?: string;
    independantWorkRegime?: string;
    yearsToPay: number;
    timeToBuyWait: number;
    propertyPrice: number;
    paymentAmount: number;
    workTime: number;
    debtPaymentAmount: number;
    email: string;
    debtAmount: number;
    phone: number;
    isFirstProperty: boolean;
    propertyType: string;
    workType: string;
    contractType: string;
}

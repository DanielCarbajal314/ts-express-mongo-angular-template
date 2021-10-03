export interface ICreatePerson {
    dni: string;
    married: boolean;
    coupleDni?: string;
    propertyPrice: number;
    initialAmount: number;
    yearsToPay: number;
    propertyType: string;
    isFirstProperty: boolean;
    timeToBuyWait: number;
    workType: string;
    independantWorkRegime?: string;
    workTime: number;
    contractType: string;
    paymentAmount: number;
    debtAmount: number;
    debtPaymentAmount: number;
    email: string;
    phone: string;
}
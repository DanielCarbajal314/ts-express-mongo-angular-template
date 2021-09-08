export interface ClientInformationData{
    dni: string;
    married: boolean;
    coupleDni?: string;
    propertyPrice: number;
    initialAmount: number;
    yearsToPay: number;
    propertyType: PropertyType;
    isFirstProperty: boolean;
    timeToBuyWait: number;
    workType: WorkType;
    independantWorkRegime?: IndependantWorkRegime;
    workTime: number;
    contractType: ContractType;
    paymentAmount: number;
    debtAmount: number;
    debtPaymentAmount: number;
    email: string;
    phone: string;
}

export enum PropertyType{
    DeparmentProject,
    DeparmentBuilt,
    House,
    Terrain
}

export enum WorkType{
    Dependant,
    Independant
}

export enum IndependantWorkRegime{
    RUS,
    RER,
    MYPE
}

export enum ContractType {
    RHE,
    Invoice,
    FifthCategory
}
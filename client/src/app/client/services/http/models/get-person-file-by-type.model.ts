export interface IGetPersonFilesByType {
    personId:string;
    type: PersonFileType;
}

export enum PersonFileType {
    Invoice = 'Invoice',
    RiskReport = 'RiskReport'
}
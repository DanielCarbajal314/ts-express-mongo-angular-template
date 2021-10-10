export interface AddFileToPerson {
    personId: string;
    fileName: string;
    buffer: Buffer;
    fileType: PersonFileType;
}

export enum PersonFileType {
    Invoice = 'Invoice',
    RiskReport = 'RiskReport'
}
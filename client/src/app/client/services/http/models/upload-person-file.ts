import { PersonFileType } from "./get-person-file-by-type.model";

export interface IUploadPersonFile{
    personId: string;
    fileType: PersonFileType;
    file: Blob;
    fileName: string;
}
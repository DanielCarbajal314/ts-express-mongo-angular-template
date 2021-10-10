import { PersonFileType } from "./get-person-file-by-type.model";

export interface IUploadPersonFileResponse{
    id: string;
    fileName: string;
    type: PersonFileType;
}
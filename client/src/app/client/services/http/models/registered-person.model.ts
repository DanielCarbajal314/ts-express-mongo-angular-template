import { CreatePerson } from "./create-person.model";
import { PersonFileType } from "./get-person-file-by-type.model";

export interface RegisteredPerson extends CreatePerson {
    _id: string;
    files: IFile[]
}



export interface IFile {
    id: string;
    fileName: string;
    type: PersonFileType;
}
import { PersonFileType } from "./add-file-to-person";

export interface IGetPersonFiles {
    personId:string;
    type: PersonFileType;
}
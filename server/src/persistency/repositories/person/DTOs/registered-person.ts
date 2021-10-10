import { IBaseEntity } from "../../common/base-entity";
import { PersonFileType } from "./add-file-to-person";
import { ICreatePerson } from "./create-person.";

export interface IPregisteredPerson extends ICreatePerson, IBaseEntity {
    files?: PersonFile[];
}

export interface PersonFile {
    id: string;
    fileName: string;
    type: PersonFileType;
}
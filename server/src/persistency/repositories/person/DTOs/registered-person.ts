import { IBaseEntity } from "../../common/base-entity";
import { ICreatePerson } from "./create-person.";

export interface IPregisteredPerson extends ICreatePerson, IBaseEntity {
}
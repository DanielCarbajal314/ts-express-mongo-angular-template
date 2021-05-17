import { BaseEntity } from "./shared/base-entity";

export interface Person extends BaseEntity {
    firstName: string;
    lastName: string;
}
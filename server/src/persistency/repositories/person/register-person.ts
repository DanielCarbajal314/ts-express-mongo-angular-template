import { saveWithDate } from "../common/save-with-date";
import { getMongoDatabase } from "../../shared/database";
import { ICreatePerson } from "./DTOs/create-person.";
import { IPregisteredPerson } from "./DTOs/registered-person";

export async function registerPerson(person:ICreatePerson): Promise<IPregisteredPerson> {
    const database = await getMongoDatabase();
    const collection = database.collection('people');
    const saveOperation = await saveWithDate(collection, person)
    return {
        ...saveOperation,
        ...person
    }
}

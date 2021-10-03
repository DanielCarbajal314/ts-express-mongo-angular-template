import { getMongoDatabase } from "../../shared/database";
import { IPregisteredPerson } from "./DTOs/registered-person";

export async function getAllPeople(): Promise<IPregisteredPerson[]> {
    const database = await getMongoDatabase();
    const collection = database.collection('people');
    return await collection.find().toArray();
}
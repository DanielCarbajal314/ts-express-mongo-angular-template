import { Person } from '../abstractions/person';
import { getMongoDatabase } from './shared/database';

export async function registerPerson(person:Person): Promise<Person> {
    const database = await getMongoDatabase();
    const collection = database.collection('people');
    const { _id, ...data} = person;
    const saveOperation = await collection.insertOne(data);
    return {
        _id : saveOperation.insertedId,
        ...data
    }
}

export async function getAllPeople(): Promise<Person[]> {
    const database = await getMongoDatabase();
    const collection = database.collection('people');
    return await collection.find().toArray();
}
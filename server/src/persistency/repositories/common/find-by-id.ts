import { ObjectID } from "bson";
import { Collection } from "mongodb";

export async function findById<T>(collection: Collection, id: string): Promise<T>{
    return await collection.findOne<T>({ _id: new ObjectID(id) });
}
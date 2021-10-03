import { Collection } from "mongodb";

export async function saveWithDate(
  collection: Collection,
  entity: any
): Promise<{ _id: string; creationDate: Date; }> {
  const creationDate = new Date();
  const saveOperation = await collection.insertOne({
    ...entity,
    creationDate,
  });
  const _id:string = saveOperation.insertedId;
  return {
    _id,
    creationDate,
  };
}

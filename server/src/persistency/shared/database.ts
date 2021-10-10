import { MongoClient, Db, GridFSBucket } from "mongodb";
import { enviroment } from "../../bootstrap/enviroment";

let database: Db;

export async function getMongoDatabase(): Promise<Db>{
  if (!database) {
    const client = new MongoClient(enviroment.mongoConnection);
    const connetion = await client.connect();
    database = connetion.db(enviroment.mongoDatabase);
  }
  return database;
}

export async function getFileGrid(): Promise<GridFSBucket>{
  if (!database) {
    const client = new MongoClient(enviroment.mongoConnection);
    const connetion = await client.connect();
    database = connetion.db(enviroment.mongoDatabase);
  }
  return new GridFSBucket(database, {
    bucketName: 'peopleFiles'
  });
}
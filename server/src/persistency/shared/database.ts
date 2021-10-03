import { MongoClient, Db } from "mongodb";
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

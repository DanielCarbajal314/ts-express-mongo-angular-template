import { MongoClient } from 'mongodb';
import { enviroment } from '../../../bootstrap/enviroment';


export async function getMongoDatabase() {
    const client = new MongoClient(enviroment.mongoConnection);
    const connetion = await client.connect();
    return connetion.db(enviroment.mongoDatabase);
}
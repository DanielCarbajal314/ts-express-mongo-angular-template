import dotenv from 'dotenv';

dotenv.config();

export const enviroment = {
    serverPort: parseInt(process.env.PORT, 10),
    mongoConnection: process.env.MONGO_CONNECTION_STRING,
    mongoDatabase: process.env.MONGO_INITDB_DATABASE
}
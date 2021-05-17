import express from 'express';
import { enviroment } from './bootstrap/enviroment';
import { setPersonRoutes } from './routes/person.routes';

const app = express();
app.use(express.json());

setPersonRoutes(app);


app.listen( enviroment.serverPort, () => {
    console.log( `Server started at http://localhost:${ enviroment.serverPort }` );
} );
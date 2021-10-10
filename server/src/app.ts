import express from 'express';
import { enviroment } from './bootstrap/enviroment';
import { setPersonRoutes } from './routes/person.routes';
import * as fileUpload from 'express-fileupload';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(fileUpload.default());
app.use(express.json());

setPersonRoutes(app);


app.listen( enviroment.serverPort, () => {
    console.log( `Server started at http://localhost:${ enviroment.serverPort }` );
} );
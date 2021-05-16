import express from 'express';
import { enviroment } from './bootstrap/enviroment';

const app = express();

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.listen( enviroment.serverPort, () => {
    console.log( `Server started at http://localhost:${ enviroment.serverPort }` );
} );
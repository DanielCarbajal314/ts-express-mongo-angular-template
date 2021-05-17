import { Express } from 'express';
import { resolveGetAllPeopleQuery } from '../handlers/queries/GetAllPeopleQuery.handler';
import { resolveCreatePersonCommand } from '../handlers/commands/CreatePersonCommand.handler';

export function setPersonRoutes(app:Express) {

    app.post('/person', async (req,res)=> {
        res.json(await resolveCreatePersonCommand(req.body));
    });

    app.get('/person', async (req,res)=> {
        res.json(await resolveGetAllPeopleQuery());
    });

}
import { Express } from 'express';
import { listAllRegisterdPeople } from '../actions/person/list-all-registered-people';
import { createPerson } from '../actions/person/create-person';
import { ValidateCreatePersonRequest } from '../actions/person/validators/validate-create-person-request';
import { configurePostWithValidation } from './common/verify-route';

export function setPersonRoutes(app:Express) {
    configurePostWithValidation(app, '/person', ValidateCreatePersonRequest(), body => createPerson(body));

    app.get('/person', async (req,res)=> {
        res.json(await listAllRegisterdPeople());
    });
}
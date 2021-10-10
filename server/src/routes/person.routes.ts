import { Express } from 'express';
import { listAllRegisterdPeople } from '../actions/person/list-all-registered-people';
import { createPerson } from '../actions/person/create-person';
import { ValidateCreatePersonRequest } from '../actions/person/validators/validate-create-person-request';
import { configurePostWithValidation } from './common/verify-route';
import { registerFileToPerson } from '../persistency/repositories/person/register-file-to-person';
import { UploadedFile } from 'express-fileupload';
import { getPersonFileByType } from '../persistency/repositories/person/get-person-file-by-type';
import { PersonFileType } from '../persistency/repositories/person/DTOs/add-file-to-person';

export function setPersonRoutes(app:Express) {
    configurePostWithValidation(app, '/person', ValidateCreatePersonRequest(), body => createPerson(body));

    app.get('/person', async (req, res)=>  {
        res.json(await listAllRegisterdPeople());
    });

    app.post('/person/files', async (req,res)=>{
        const { personId, fileType } = req.body;
        const file:UploadedFile = req.files.file as UploadedFile;
        res.json(await registerFileToPerson({
            buffer: file.data,
            fileName: file.name,
            personId,
            fileType
        }));
    });

    app.get('/person/files', async (req,res)=>{
        const { personId, type } = req.query;
        const result = await getPersonFileByType({
            personId: personId as string,
            type: type as PersonFileType
        });
        res.setHeader("Content-Disposition","attachment; filename=" + result.fileName);
        res.end(result.buffer);
    });
}
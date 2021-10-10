import { getMongoDatabase } from "../../../persistency/shared/database";
import { findById } from "../common/find-by-id";
import { IRegisteredFile } from "../files/DTOs/registered-file";
import { getFileById } from "../files/get-file-by-id";
import { IGetPersonFiles } from "./DTOs/get-person-file";
import { IPregisteredPerson } from "./DTOs/registered-person";


export async function getPersonFileByType(request:IGetPersonFiles): Promise<IRegisteredFile> {
    const database = await getMongoDatabase();
    const collection = database.collection('people');
    const person = await findById<IPregisteredPerson>(
        collection,
        request.personId
    );
    console.log(person);
    const fileSearched = person.files.find(x => x.type === request.type);
    const buffer = await getFileById(fileSearched.id);
    return {
        buffer,
        fileName: fileSearched.fileName
    };
}

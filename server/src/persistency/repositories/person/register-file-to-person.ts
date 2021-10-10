import { ObjectID } from "mongodb";
import { getMongoDatabase } from "../../../persistency/shared/database";
import { findById } from "../common/find-by-id";
import { saveFile } from "../files/save-file";
import { AddFileToPerson } from "./DTOs/add-file-to-person";
import { IPregisteredPerson, PersonFile } from "./DTOs/registered-person";

export async function registerFileToPerson(
  request: AddFileToPerson
): Promise<PersonFile> {
    const database = await getMongoDatabase();
    const collection = database.collection("people");
    const person = await findById<IPregisteredPerson>(
        collection,
        request.personId
    );
    const fileId = await saveFile(request);
    const personFiles = (person.files ?? []).filter(
        (x) => x.type !== request.fileType
    );
    const newFile: PersonFile = {
        id: fileId,
        fileName: request.fileName,
        type: request.fileType,
    };
    collection.updateOne(
        { _id: new ObjectID(request.personId) },
        { $set: { files: [...personFiles, newFile] } }
    );
    return newFile;
}

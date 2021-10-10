import { Readable } from "stream";
import { getFileGrid } from "../../../persistency/shared/database";
import { ICreateFile } from "./DTOs/create-file";

export async function saveFile(request: ICreateFile): Promise<string> {
    const promise = new Promise<string>(async (resolve,reject)=>{
        const bucket = await getFileGrid();
        const stream = new Readable();
        stream.push(request.buffer);
        stream.push(null);
        const writeStream = bucket.openUploadStream(request.fileName);
        stream.pipe(writeStream.on('finish', () => {
            resolve(writeStream.id.toString());
        }));
    });
    return promise;
}
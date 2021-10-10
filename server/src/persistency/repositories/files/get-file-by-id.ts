import { WriteStream } from "fs";
import { ObjectId } from "mongodb";
import { getFileGrid } from "../../../persistency/shared/database";
import { IRegisteredFile } from "./DTOs/registered-file";

export async function getFileById(id: string): Promise<Buffer> {
    const promise = new Promise<Buffer>(async (resolve,reject)=>{
        const bucket = await getFileGrid();
        const objectId = new ObjectId(id);
        const downloadStream = bucket.openDownloadStream(objectId);
        const bufferArray: any = [];
        downloadStream.on('data',(chunk) => {
            bufferArray.push(chunk);
        });
        downloadStream.on('end', ()=>{
            const buffer = Buffer.concat(bufferArray);
            resolve(buffer);
        })
    });
    return promise;
}
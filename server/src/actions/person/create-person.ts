import { registerPerson } from "../../persistency/repositories/person/register-person";
import { CreatePersonRequest } from "./DTOs/create-person-request";
import { CreatePersonResponse } from "./DTOs/create-person-response";

export async function createPerson(body: CreatePersonRequest): Promise<CreatePersonResponse>{
    return await registerPerson(body);
}
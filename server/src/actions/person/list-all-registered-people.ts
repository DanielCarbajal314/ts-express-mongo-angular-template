import { getAllPeople } from "../../persistency/repositories/person/get-all-people";
import { CreatePersonResponse } from "./DTOs/create-person-response";

export async function listAllRegisterdPeople(): Promise<CreatePersonResponse[]>{
    return await getAllPeople();
}
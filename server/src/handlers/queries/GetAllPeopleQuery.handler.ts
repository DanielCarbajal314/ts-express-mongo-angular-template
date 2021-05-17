import { getAllPeople } from "../../persistency/repository/person-repository";
import { GetAllPeopleQuery, GetAllPeopleQueryResponse } from "../abstractions/queries/get-all-people.query";

export async function resolveGetAllPeopleQuery() : Promise<GetAllPeopleQueryResponse> {
    const data = await getAllPeople();
    const people = data.map(({_id, firstName, lastName }) => ({
        firstName,
        lastName,
        id: _id
    }));
    return { people }
}
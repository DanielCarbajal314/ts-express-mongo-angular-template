export interface GetAllPeopleQuery {
    firstName?: string;
    lastName?: string;
}

export interface GetAllPeopleQueryResponse {
    people: PersonItem[];
}

export interface PersonItem {
    id: string;
    firstName: string;
    lastName: string;
}
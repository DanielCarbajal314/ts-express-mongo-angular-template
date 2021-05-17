export interface CreatePersonCommand {
    firstName: string;
    lastName: string;
}

export interface CreatePersonCommandResponse {
    id: string;
    firstName: string;
    lastName: string;
}
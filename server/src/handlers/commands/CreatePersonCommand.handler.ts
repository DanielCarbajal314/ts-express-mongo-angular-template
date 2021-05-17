import { registerPerson } from "../../persistency/repository/person-repository";
import { CreatePersonCommand, CreatePersonCommandResponse } from "../abstractions/commands/register-person.command";

export async function resolveCreatePersonCommand(command:CreatePersonCommand): Promise<CreatePersonCommandResponse> {
    const { firstName, lastName } = command;
    const createdUser = await registerPerson({ firstName, lastName });
    const { _id, ...data } = createdUser;
    return {
        id: _id,
        ...data
    }
}
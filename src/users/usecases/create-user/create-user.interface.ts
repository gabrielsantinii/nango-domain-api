import { ReadUserDto } from "../../../data/users/dtos";

export interface CreateUserResult {
    perform: () => Promise<ReadUserDto>
}
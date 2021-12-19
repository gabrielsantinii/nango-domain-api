import { ReadUserDto } from "../../../data/users/dtos";

export interface GetUserByAuthIdResult {
    perform: () => Promise<ReadUserDto | null>
}
import { GetUserByAuthIdResult } from ".";
import { UsersDaoResult } from "../../../data/users/daos";

export class GetUserByAuthId implements GetUserByAuthIdResult {
    constructor(private readonly authId: string, private readonly usersDao: UsersDaoResult) {}

    async perform() {
        return this.usersDao.findByAuthId(this.authId);
    }
}

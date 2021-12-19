import { CreateUserResult } from ".";
import { UsersDaoResult } from "../../../data/users/daos";
import { CreateUserDto } from "../../../data/users/dtos";

export class CreateUser implements CreateUserResult {
    constructor(private readonly userData: CreateUserDto, private readonly usersDao: UsersDaoResult) {}

    async perform() {
        return this.usersDao.create(this.userData);
    }
}
import { UsersDaoResult } from "../../../data/users/daos";
import { CreateUserDto } from "../../../data/users/dtos";
import { UsersTestUtils } from "../../__tests__";

class CreateUser {
    constructor(private readonly userData: CreateUserDto, private readonly usersDao: UsersDaoResult) {}

    async perform() {
        return this.usersDao.create(this.userData);
    }
}

const mockUsersDao: UsersDaoResult = {
    create: jest.fn(),
    findById: jest.fn(),
    findEmployeesByInstitutionId: jest.fn(),
    findStudentsByInstitutionId: jest.fn(),
};

describe("create-user needs to create a new user", () => {
    it("should create a new user", async () => {
        const newUser = UsersTestUtils.getValidUser();
        const createUser = new CreateUser(newUser, mockUsersDao);
        mockUsersDao.create = jest.fn().mockReturnValue({ id: "generated" });
        const createdResult = await createUser.perform();
        expect(createdResult).toHaveProperty("id");
    });
});

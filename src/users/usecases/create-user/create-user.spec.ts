import { CreateUser } from ".";
import { UsersDaoResult } from "../../../data/users/daos";
import { UsersTestUtils } from "../../__tests__";

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

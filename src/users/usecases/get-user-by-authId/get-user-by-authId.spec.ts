import { GetUserByAuthId } from ".";
import { UsersDaoResult } from "../../../data/users/daos";

const mockUsersDao: UsersDaoResult = {
    create: jest.fn(),
    findById: jest.fn(),
    findEmployeesByInstitutionId: jest.fn(),
    findStudentsByInstitutionId: jest.fn(),
    findByAuthId: jest.fn(),
};

describe("get-user-by-auth-id needs to return an user with id", () => {
    it("should return an user with id", async () => {
        const getUserByAuthId = new GetUserByAuthId("authId", mockUsersDao);
        mockUsersDao.findByAuthId = jest.fn().mockReturnValue({ id: "generated" });
        const createdResult = await getUserByAuthId.perform();
        expect(createdResult).toHaveProperty("id");
    });
});

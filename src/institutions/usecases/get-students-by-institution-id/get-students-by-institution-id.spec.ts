import { GetStudentsByInstitutionId, GetStudentsByInstitutionIdResult } from ".";
import { UsersDaoResult } from "../../../data/users/daos";

type SutParams = { institutionId: string };
type SutType = { sut: GetStudentsByInstitutionIdResult; institutionId: string };

const usersDaoMock: UsersDaoResult = {
    findEmployeesByInstitutionId: jest.fn(),
    findById: jest.fn(),
    findStudentsByInstitutionId: jest.fn(),
    create: jest.fn(),
};

const makeSut = ({ institutionId }: SutParams): SutType => {
    const sut = new GetStudentsByInstitutionId(institutionId, usersDaoMock);
    return { sut, institutionId };
};

describe("get-students-by-institution-id must return an list of students related to institutionId", () => {
    it("should return an empty list once dont have any student related", async () => {
        const { sut } = makeSut({ institutionId: "NOT_EXISTS" });
        usersDaoMock.findStudentsByInstitutionId = jest.fn().mockReturnValue([]);
        const studentsList = await sut.perform();
        expect(studentsList.length).toBe(0);
    });

    it("should return an filled list of students related to institutionId", async () => {
        const { sut } = makeSut({ institutionId: "existant_institution" });
        usersDaoMock.findStudentsByInstitutionId = jest.fn().mockReturnValue([{}]);
        const studentsList = await sut.perform();
        expect(studentsList.length).toBeGreaterThanOrEqual(1);
    });
});
{
}

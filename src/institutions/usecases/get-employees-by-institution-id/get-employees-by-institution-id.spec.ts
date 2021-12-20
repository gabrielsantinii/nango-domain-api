import { GetEmployeeByInstitutionIdResult, GetEmployeesByInstitutionId } from ".";
import { UsersDaoResult } from "../../../data/users/daos";

type SutParams = { institutionId: string };
type SutType = { institutionId: string; sut: GetEmployeeByInstitutionIdResult };

const usersDaoMock: UsersDaoResult = {
    findEmployeesByInstitutionId: jest.fn(),
    findById: jest.fn(),
    findStudentsByInstitutionId: jest.fn(),
    create: jest.fn(),
    findByAuthId: jest.fn(),
};

const makeSut = ({ institutionId }: SutParams): SutType => {
    const sut = new GetEmployeesByInstitutionId(institutionId, usersDaoMock);
    return { sut, institutionId };
};

describe("get-employees-by-institution-id needs to return a list of employees related to the institution", () => {
    it("should throw exception cause the institution has no employees. Thats mandatory.", async () => {
        const { sut } = makeSut({ institutionId: "NOT_EXISTS" });
        usersDaoMock.findStudentsByInstitutionId = jest.fn().mockReturnValue([]);
        expect(async () => await sut.perform()).rejects.toThrow(`The institutionId NOT_EXISTS has no employees.`);
    });

    it("should return the filled list of employees", async () => {
        const { sut } = makeSut({ institutionId: "existant_institution" });
        usersDaoMock.findEmployeesByInstitutionId = jest.fn().mockReturnValue([{}, {}]);
        const employees = await sut.perform();
        expect(employees.length).toBeGreaterThanOrEqual(1);
    });
});

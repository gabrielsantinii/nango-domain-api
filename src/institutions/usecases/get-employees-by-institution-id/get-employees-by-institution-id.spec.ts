import { GetEmployeeByInstitutionIdResult, GetEmployeesByInstitutionId } from ".";

type SutParams = { institutionId: string };
type SutType = { institutionId: string; sut: GetEmployeeByInstitutionIdResult };

const makeSut = ({ institutionId }: SutParams): SutType => {
    const sut = new GetEmployeesByInstitutionId(institutionId);
    return { sut, institutionId };
};

describe("get-employees-by-institution-id needs to return a list of employees related to the institution", () => {
    it("should throw exception cause the institution has no employees. Thats mandatory.", async () => {
        const { sut } = makeSut({ institutionId: "NOT_EXISTS" });

        expect(async () => await sut.perform()).rejects.toThrow(`The institutionId NOT_EXISTS has no employees.`);
    });

    it("should return the filled list of employees", async () => {
        const { sut } = makeSut({ institutionId: "existant_institution" });
        const employees = await sut.perform();

        expect(employees.length).toBeGreaterThanOrEqual(1);
    });
});

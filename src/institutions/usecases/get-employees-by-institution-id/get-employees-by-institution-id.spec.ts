interface EmployeeByInstitutionId {
    id: string;
    institutionId: string;
}

interface GetEmployeeByInstitutionIdResult {
    perform: () => Promise<EmployeeByInstitutionId[]>;
}

class GetEmployeesByInstitutionId implements GetEmployeeByInstitutionIdResult {
    constructor(private readonly institutionId: string) {}
    private readonly existantEmployees = [{ id: "any", institutionId: "existant_institution" }];
    async perform() {
        const employees = this.existantEmployees.filter((employee) => employee.institutionId === this.institutionId);
        if (!employees.length) {
            throw new Error(`The institutionId ${this.institutionId} has no employees.`);
        }
        return employees;
    }
}
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

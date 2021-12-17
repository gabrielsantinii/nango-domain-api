import { GetEmployeeByInstitutionIdResult } from ".";

export class GetEmployeesByInstitutionId implements GetEmployeeByInstitutionIdResult {
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
import { GetEmployeeByInstitutionIdResult, EmployeeByInstitutionId } from ".";

export class GetEmployeesByInstitutionId implements GetEmployeeByInstitutionIdResult {
    constructor(private readonly institutionId: string) {}
    private readonly existantEmployees: EmployeeByInstitutionId[] = [
        {
            id: "any",
            institutions: ["existant_institution"],
            active: true,
            firstName: "First",
            lastName: "Last",
            photoUrl: "",
            role: "educator",
        },
    ];
    async perform() {
        const employees = this.existantEmployees.filter((employee) =>
            employee.institutions.includes(this.institutionId)
        );
        if (!employees.length) {
            throw new Error(`The institutionId ${this.institutionId} has no employees.`);
        }
        return employees;
    }
}

import { GetEmployeeByInstitutionIdResult } from ".";
import { UsersDaoResult } from "../../../data/users/daos";

export class GetEmployeesByInstitutionId implements GetEmployeeByInstitutionIdResult {
    constructor(private readonly institutionId: string, private readonly usersDao: UsersDaoResult) {}

    async perform() {
        const employees = await this.usersDao.findEmployeesByInstitutionId(this.institutionId);
        if (!employees.length) {
            throw new Error(`The institutionId ${this.institutionId} has no employees.`);
        }
        return employees;
    }
}

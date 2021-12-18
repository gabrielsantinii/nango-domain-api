import { GetStudentsByInstitutionIdResult } from ".";
import { UsersDaoResult } from "../../../data/users/daos";

export class GetStudentsByInstitutionId implements GetStudentsByInstitutionIdResult {
    constructor(private readonly institutionId: string, private readonly usersDao: UsersDaoResult) {}

    async perform() {
        const students = await this.usersDao.findStudentsByInstitutionId(this.institutionId);
        return students;
    }
}

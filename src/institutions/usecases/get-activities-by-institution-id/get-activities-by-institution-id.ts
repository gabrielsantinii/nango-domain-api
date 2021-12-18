import { GetActivitiesByInstitutionIdResult } from ".";
import { ClassesDaoResult } from "../../../data/classes/daos";

export class GetActivitiesByInstitutionId implements GetActivitiesByInstitutionIdResult {
    constructor(private readonly institutionId: string, private readonly classesDao: ClassesDaoResult) {}

    async perform() {
        const activities = await this.classesDao.findByInstitutionId(this.institutionId);
        return activities;
    }
}

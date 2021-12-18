import { GetActivitiesByInstitutionIdResult } from ".";
import { ActivitiesDaoResult } from "../../../data/activities/daos";

export class GetActivitiesByInstitutionId implements GetActivitiesByInstitutionIdResult {
    constructor(private readonly institutionId: string, private readonly activitiesDao: ActivitiesDaoResult) {}

    async perform() {
        const activities = await this.activitiesDao.findByInstitutionId(this.institutionId);
        return activities;
    }
}

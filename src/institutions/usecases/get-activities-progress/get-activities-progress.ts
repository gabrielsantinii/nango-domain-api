import { GetActivitiesProgressResult } from ".";
import { ActivityByInstitution, GetActivitiesByInstitutionIdResult } from "../get-activities-by-institution-id";

export class GetActivitiesProgress implements GetActivitiesProgressResult {
    constructor(private readonly getActivitiesByInstitutionId: GetActivitiesByInstitutionIdResult) {}

    async perform() {
        const activitiesByInstitutionId = await this.getActivitiesByInstitutionId.perform();
        const finishedActivities = this.filterFinishedActivities(activitiesByInstitutionId);
        return {
            totalCount: activitiesByInstitutionId.length,
            finishedCount: finishedActivities.length,
        };
    }

    private filterFinishedActivities(activities: ActivityByInstitution[]): ActivityByInstitution[] {
        return activities.filter((activity) => activity.status === "finished");
    }
}
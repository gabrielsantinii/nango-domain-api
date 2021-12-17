import { ActivityByInstitution, GetActivitiesByInstitutionIdResult } from ".";

export class GetActivitiesByInstitutionId implements GetActivitiesByInstitutionIdResult {
    constructor(private readonly institutionId: string) {}
    private readonly existantActivities: ActivityByInstitution[] = [
        { status: "finished", id: "123123", institutionId: "existant_institution" },
        { status: "finished", id: "4124312412", institutionId: "existant_institution" },
    ];

    async perform() {
        const activitiesByInstitutionId = this.existantActivities.filter(
            (activity) => activity.institutionId === this.institutionId
        );
        return activitiesByInstitutionId;
    }
}

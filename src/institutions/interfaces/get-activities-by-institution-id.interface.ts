export interface ActivityByInstitution {
    status: string;
    id: string;
    institutionId: string;
}

export interface GetActivitiesByInstitutionIdResult {
    perform: () => Promise<ActivityByInstitution[]>;
}

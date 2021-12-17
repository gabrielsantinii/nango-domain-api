export interface ClassByInstitutionId {
    id: string;
    institutionId: string;
    name: string;
    trailsCount: number;
    studentsCount: number;
    educators: { name: string; id: string }[];
}

export interface GetClassesByInstitutionIdResult {
    perform: () => Promise<ClassByInstitutionId[]>;
}

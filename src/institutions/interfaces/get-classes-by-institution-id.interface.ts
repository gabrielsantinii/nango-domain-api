export interface ClassByInstitutionId {
    id: string;
    institutionId: string;
}

export interface GetClassesByInstitutionIdResult {
    perform: () => Promise<ClassByInstitutionId[]>;
}

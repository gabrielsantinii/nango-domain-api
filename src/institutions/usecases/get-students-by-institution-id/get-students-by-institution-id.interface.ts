export interface StudentByInstitutionId {
    institutionId: string;
    id: string;
}

export interface GetStudentsByInstitutionIdResult {
    perform: () => Promise<StudentByInstitutionId[]>;
}
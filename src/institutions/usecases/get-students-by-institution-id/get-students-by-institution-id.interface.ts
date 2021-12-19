export interface StudentByInstitutionId {
    institutions: string[];
    id: string;
    firstName: string;
    lastName: string;
    photoUrl?: string;
    displayName: string;
    email: string;
}

export interface GetStudentsByInstitutionIdResult {
    perform: () => Promise<StudentByInstitutionId[]>;
}

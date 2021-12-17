export interface EmployeeByInstitutionId {
    id: string;
    institutionId: string;
}

export interface GetEmployeeByInstitutionIdResult {
    perform: () => Promise<EmployeeByInstitutionId[]>;
}

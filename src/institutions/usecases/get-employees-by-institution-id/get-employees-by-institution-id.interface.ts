export interface EmployeeByInstitutionId {
    id: string;
    institutions: string[];
    firstName: string;
    lastName: string;
    role: "educator" | "student" | "administrator" | "assistant";
    active: boolean;
    photoUrl: string;
}

export interface GetEmployeeByInstitutionIdResult {
    perform: () => Promise<EmployeeByInstitutionId[]>;
}

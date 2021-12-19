import { Status } from "../../../shared/enums";

export interface EmployeeByInstitutionId {
    id: string;
    firstName: string;
    lastName: string;
    status: Status;
    photoUrl?: string;
}

export interface GetEmployeeByInstitutionIdResult {
    perform: () => Promise<EmployeeByInstitutionId[]>;
}

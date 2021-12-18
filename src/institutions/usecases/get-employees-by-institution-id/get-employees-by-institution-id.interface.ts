import { StatusType } from "../../../shared/types";

export interface EmployeeByInstitutionId {
    id: string;
    firstName: string;
    lastName: string;
    status: StatusType;
    photoUrl: string;
}

export interface GetEmployeeByInstitutionIdResult {
    perform: () => Promise<EmployeeByInstitutionId[]>;
}

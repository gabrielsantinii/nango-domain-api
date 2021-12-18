import { UserDto } from "../dtos";

export interface UsersDaoResult {
    findStudentsByInstitutionId: (institutionId: string) => Promise<UserDto[]>;
    findEmployeesByInstitutionId: (institutionId: string) => Promise<UserDto[]>;
    findById: (id: string) => Promise<UserDto | null>;
}

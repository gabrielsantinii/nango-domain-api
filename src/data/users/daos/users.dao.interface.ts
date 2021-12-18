import { ReadUserDto } from "../dtos";
import { CreateUserDto } from "../dtos/create.user.dto";

export interface UsersDaoResult {
    findStudentsByInstitutionId: (institutionId: string) => Promise<ReadUserDto[]>;
    findEmployeesByInstitutionId: (institutionId: string) => Promise<ReadUserDto[]>;
    findById: (id: string) => Promise<ReadUserDto | null>;
    create: (userData: CreateUserDto) => Promise<ReadUserDto>
}

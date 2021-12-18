import { ClassDto } from "../dtos";

export interface ClassesDaoResult {
    findByInstitutionId: (institutionId: string) => Promise<ClassDto[]>
}
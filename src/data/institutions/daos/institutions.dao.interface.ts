import { InstitutionDto } from "../dtos";

export interface InstitutionsDaoResult {
    findById(id: string): Promise<InstitutionDto | null>;
}

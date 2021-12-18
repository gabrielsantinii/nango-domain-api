import { CreateInstitutionDto, ReadInstitutionDto } from "../dtos";

export interface InstitutionsDaoResult {
    findById(id: string): Promise<ReadInstitutionDto | null>;
    create(institutionData: CreateInstitutionDto): Promise<ReadInstitutionDto>;
}

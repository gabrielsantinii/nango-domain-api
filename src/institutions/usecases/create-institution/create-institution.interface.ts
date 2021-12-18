import { ReadInstitutionDto } from "../../../data/institutions/dtos";

export interface CreateInstitutionResult {
    perform: () => Promise<ReadInstitutionDto>
}
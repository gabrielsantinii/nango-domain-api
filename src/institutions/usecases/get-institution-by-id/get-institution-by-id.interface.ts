import { ReadInstitutionDto } from "../../../data/institutions/dtos";

export interface GetInstitutionByIdResult {
    perform: () => Promise<ReadInstitutionDto>;
}

import { InstitutionDto } from "../../../data/institutions/dtos";

export interface GetInstitutionByIdResult {
    perform: () => Promise<InstitutionDto>;
}

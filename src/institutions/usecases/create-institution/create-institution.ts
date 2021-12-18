import { InstitutionsDaoResult } from "../../../data/institutions/daos";
import { CreateInstitutionDto } from "../../../data/institutions/dtos";
import { CreateInstitutionResult } from "./create-institution.interface";

export class CreateInstitution implements CreateInstitutionResult {
    constructor(
        private readonly institutionData: CreateInstitutionDto,
        private readonly institutionsDao: InstitutionsDaoResult
    ) {}

    async perform() {
        return this.institutionsDao.create(this.institutionData);
    }
}

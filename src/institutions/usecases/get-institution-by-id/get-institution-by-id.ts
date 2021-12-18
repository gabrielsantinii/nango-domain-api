import { GetInstitutionByIdResult } from ".";
import { InstitutionsDaoResult } from "../../../data/institutions/daos";

export class GetInstitutionById implements GetInstitutionByIdResult {
    constructor(private readonly institutionId: string, private readonly institutionsDao: InstitutionsDaoResult) {}

    async perform() {
        const institutionById = await this.institutionsDao.findById(this.institutionId);
        if (!institutionById) {
            throw Error("The institutionId does not exist.");
        }
        return institutionById;
    }
}

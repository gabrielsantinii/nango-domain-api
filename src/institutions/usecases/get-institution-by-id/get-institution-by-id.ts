import { GetInstitutionByIdResult, InstitutionById } from "../../interfaces";

export class GetInstitutionById implements GetInstitutionByIdResult {
    constructor(private readonly institutionId: string) {}
    private readonly existantIds: InstitutionById[] = [{ id: "existant_id", name: "any", periodEndDate: new Date() }];

    async perform() {
        const institutionById = this.existantIds.find((institution) => institution.id === this.institutionId);
        if (!institutionById) {
            throw Error("The institutionId does not exist.");
        }
        return institutionById;
    }
}
import { ClassByInstitutionId, GetClassesByInstitutionIdResult } from ".";

export class GetClassesByInstitutionId implements GetClassesByInstitutionIdResult {
    constructor(private readonly institutionId: string) {}
    private readonly existantClasses: ClassByInstitutionId[] = [{ id: "any", institutionId: "existant_institution" }];

    async perform() {
        const classes = this.existantClasses.filter((eClass) => eClass.institutionId === this.institutionId);
        return classes;
    }
}

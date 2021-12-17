import { ClassByInstitutionId, GetClassesByInstitutionIdResult } from ".";

export class GetClassesByInstitutionId implements GetClassesByInstitutionIdResult {
    constructor(private readonly institutionId: string) {}
    private readonly existantClasses: ClassByInstitutionId[] = [
        {
            id: "any",
            institutionId: "existant_institution",
            name: "any-class-name",
            educators: [{ id: "any_ed_id", name: "any-Name" }],
            studentsCount: 10,
            trailsCount: 12,
        },
    ];

    async perform() {
        const classes = this.existantClasses.filter((eClass) => eClass.institutionId === this.institutionId);
        return classes;
    }
}

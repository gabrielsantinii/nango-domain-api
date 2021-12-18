import { ClassByInstitutionId, GetClassesByInstitutionIdResult } from ".";
import { ClassesDaoResult } from "../../../data/classes/daos";
import { ClassDto } from "../../../data/classes/dtos";

export class GetClassesByInstitutionId implements GetClassesByInstitutionIdResult {
    constructor(private readonly institutionId: string, private readonly classesDao: ClassesDaoResult) {}

    async perform() {
        const classes = await this.classesDao.findByInstitutionId(this.institutionId);
        return this.formatToClassByInstitutionId(classes);
    }

    private formatToClassByInstitutionId(classes: ClassDto[]): ClassByInstitutionId[] {
        return classes.map((unfClass) => ({
            name: unfClass.name,
            id: unfClass.id,
            institutionId: unfClass.institutionId,
            educators: unfClass.educators,
            trailsCount: 0,
            studentsCount: unfClass.students.length,
        }));
    }
}

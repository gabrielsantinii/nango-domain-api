import { GetStudentsByInstitutionIdResult, StudentByInstitutionId } from "../../interfaces";

export class GetStudentsByInstitutionId implements GetStudentsByInstitutionIdResult {
    constructor(private readonly institutionId: string) {}
    private readonly existantsStudents: StudentByInstitutionId[] = [
        { id: "any", institutionId: "existant_institution" },
    ];
    async perform() {
        const students = this.existantsStudents.filter((student) => student.institutionId === this.institutionId);
        return students;
    }
}

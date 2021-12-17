import { GetStudentsByInstitutionIdResult, StudentByInstitutionId } from ".";

export class GetStudentsByInstitutionId implements GetStudentsByInstitutionIdResult {
    constructor(private readonly institutionId: string) {}
    private readonly existantsStudents: StudentByInstitutionId[] = [
        {
            id: "any",
            institutions: ["existant_institution"],
            displayName: "Any Name",
            email: "any@example.com",
            firstName: "Any",
            lastName: "Name",
            photoUrl: "",
        },
    ];
    async perform() {
        const students = this.existantsStudents.filter((student) => student.institutions.includes(this.institutionId));
        return students;
    }
}

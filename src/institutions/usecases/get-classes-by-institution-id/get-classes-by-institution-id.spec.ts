interface ClassByInstitutionId {
    id: string;
    institutionId: string;
}

interface GetClassesByInstitutionIdResult {
    perform: () => Promise<ClassByInstitutionId[]>;
}

class GetClassesByInstitutionId implements GetClassesByInstitutionIdResult {
    constructor(private readonly institutionId: string) {}
    private readonly existantClasses: ClassByInstitutionId[] = [{ id: "any", institutionId: "existant_institution" }];

    async perform() {
        const classes = this.existantClasses.filter((eClass) => eClass.institutionId === this.institutionId);
        return classes;
    }
}
type SutParams = { institutionId: string };
type SutType = { sut: GetClassesByInstitutionIdResult; institutionId: string };
const makeSut = ({ institutionId }: SutParams): SutType => {
    const sut = new GetClassesByInstitutionId(institutionId);
    return { sut, institutionId };
};

describe("get-classes-by-institution-id needs to return a list of classes related to institutionId", () => {
    it("should return an empty list of classes once the institution does not have any class configured", async () => {
        const { sut } = makeSut({ institutionId: "NOT_EXISTS" });
        const classes = await sut.perform();
        expect(classes.length).toBe(0);
    });

    it("should return a filled list of classes related to the institution", async () => {
        const { sut } = makeSut({ institutionId: "existant_institution" });
        const classes = await sut.perform();
        expect(classes.length).toBeGreaterThanOrEqual(1);
    });
});

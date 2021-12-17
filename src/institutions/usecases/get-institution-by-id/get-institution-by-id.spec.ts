import { InstitutionById } from "../../interfaces/get-institution-by-id-result.interface";
interface GetInstitutionByIdResult {
    perform: () => Promise<InstitutionById>;
}

class GetInstitutionByIdSpy implements GetInstitutionByIdResult {
    constructor(private readonly institutionId: string) {}

    async perform() {
        return { id: this.institutionId, name: "", periodEndDate: new Date() };
    }
}

describe("the get institution by id needs to return the institution record", () => {
    it("should return the same taken id on arguments.", async () => {
        const sut = new GetInstitutionByIdSpy("anyInstitutionId");
        const institutionById = await sut.perform();
        expect(institutionById.id).toBe("anyInstitutionId");
    });

    it("should throws exception for not found institution ID", async () => {});
});

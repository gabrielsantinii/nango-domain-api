import { InstitutionById } from "../../interfaces/get-institution-by-id-result.interface";
interface GetInstitutionByIdResult {
    perform: () => InstitutionById;
}

class GetInstitutionByIdSpy implements GetInstitutionByIdResult {
    constructor(private readonly institutionId: string) {}
    private readonly existantIds: InstitutionById[] = [{ id: "existant_id", name: "any", periodEndDate: new Date() }];

    perform() {
        const institutionById = this.existantIds.find((institution) => institution.id === this.institutionId);
        if (!institutionById) {
            throw Error("The institutionId does not exist.");
        }
        return institutionById;
    }
}
type SutType = { institutionId: string };
const makeSut = ({ institutionId }: SutType): GetInstitutionByIdResult => {
    return new GetInstitutionByIdSpy(institutionId);
};

describe("the get institution by id needs to return the institution record", () => {
    it("should return the same taken id on arguments.", async () => {
        const sut = makeSut({ institutionId: "existant_id" });
        const institutionById = sut.perform();
        expect(institutionById.id).toBe("existant_id");
    });

    it("should throws exception for not found institution ID", async () => {
        const sut = makeSut({ institutionId: "not-existant-id" });

        expect(() => sut.perform()).toThrow("The institutionId does not exist.");
    });
});

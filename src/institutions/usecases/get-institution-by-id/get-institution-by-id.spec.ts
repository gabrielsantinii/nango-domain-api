import { GetInstitutionByIdResult } from ".";
import { InstitutionsDaoResult } from "../../../data/institutions/daos";
import { GetInstitutionById } from "./get-institution-by-id";

const mockDao: InstitutionsDaoResult = { findById: jest.fn(), create: jest.fn() };

type SutType = { institutionId: string };
const makeSut = ({ institutionId }: SutType): GetInstitutionByIdResult => {
    return new GetInstitutionById(institutionId, mockDao);
};

describe("the get institution by id needs to return the institution record", () => {
    it("should return the same taken id on arguments.", async () => {
        const sut = makeSut({ institutionId: "existant_id" });
        mockDao.findById = jest.fn().mockReturnValue({ id: "existant_id" });
        const institutionById = await sut.perform();
        expect(institutionById.id).toBe("existant_id");
    });

    it("should throws exception for not found institution ID", async () => {
        const sut = makeSut({ institutionId: "not-existant-id" });

        expect(async () => await sut.perform()).rejects.toThrow("The institutionId does not exist.");
    });
});

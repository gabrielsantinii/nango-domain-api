import { GetClassesByInstitutionIdResult } from ".";
import { ClassesDaoResult } from "../../../data/classes/daos";
import { GetClassesByInstitutionId } from "./get-classes-by-institution-id";

const classesDaoMock: ClassesDaoResult = { findByInstitutionId: jest.fn() };

type SutParams = { institutionId: string };
type SutType = { sut: GetClassesByInstitutionIdResult; institutionId: string };
const makeSut = ({ institutionId }: SutParams): SutType => {
    const sut = new GetClassesByInstitutionId(institutionId, classesDaoMock);
    return { sut, institutionId };
};

describe("get-classes-by-institution-id needs to return a list of classes related to institutionId", () => {
    it("should return an empty list of classes once the institution does not have any class configured", async () => {
        const { sut } = makeSut({ institutionId: "NOT_EXISTS" });
        classesDaoMock.findByInstitutionId = jest.fn().mockReturnValue([]);
        const classes = await sut.perform();
        expect(classes.length).toBe(0);
    });

    it("should return a filled list of classes related to the institution", async () => {
        const { sut } = makeSut({ institutionId: "existant_institution" });
        classesDaoMock.findByInstitutionId = jest.fn().mockReturnValue([{ students: [{ id: "Jael", name: "" }] }]);
        const classes = await sut.perform();
        expect(classes.length).toBeGreaterThanOrEqual(1);
    });
});

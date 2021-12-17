import { GetActivitiesByInstitutionIdResult } from "../../interfaces";
import { GetActivitiesByInstitutionId } from ".";

type SutParams = { institutionId: string };
type SutType = { sut: GetActivitiesByInstitutionIdResult; institutionId: string };

const makeSut = ({ institutionId }: SutParams): SutType => {
    const sut = new GetActivitiesByInstitutionId(institutionId);
    return { sut, institutionId };
};

describe("get-activities-by-institution-id needs to return a list with activities", () => {
    it("should return an empty list cause it is an unexisting institutionId", async () => {
        const { sut } = makeSut({ institutionId: "NOT_EXISTS" });
        const activitiesList = await sut.perform();
        expect(activitiesList).toHaveLength(0);
    });

    it("should return a filled list with existant institutionId", async () => {
        const { sut } = makeSut({ institutionId: "existant_institution" });
        const activitiesList = await sut.perform();
        expect(activitiesList.length).toBeGreaterThanOrEqual(1);
    });
});

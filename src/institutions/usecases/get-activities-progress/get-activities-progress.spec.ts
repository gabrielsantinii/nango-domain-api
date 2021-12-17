import { GetActivitiesProgress } from ".";
import { GetActivitiesByInstitutionId } from "../get-activities-by-institution-id";
import { GetActivitiesByInstitutionIdResult, GetActivitiesProgressResult } from "../../interfaces";

type SutType = {
    sut: GetActivitiesProgressResult;
    getActivitiesByInstitutionIdSpy: GetActivitiesByInstitutionIdResult;
};

type SutParams = {
    institutionId: string;
};

const makeSut = ({ institutionId }: SutParams): SutType => {
    const getActivitiesByInstitutionIdSpy = new GetActivitiesByInstitutionId(institutionId);
    const sut = new GetActivitiesProgress(getActivitiesByInstitutionIdSpy);
    return { sut, getActivitiesByInstitutionIdSpy };
};

describe("get activities progress need to return the totalCount and finishedCount", () => {
    it("the total count must be greater or equal than finishedCount", async () => {
        const { sut } = makeSut({ institutionId: "existant_institution" });
        const { finishedCount, totalCount } = await sut.perform();
        expect(totalCount).toBeGreaterThanOrEqual(finishedCount);
    });

    it("the total and finished count must be 0 if has no related activities to the institution", async () => {
        const { sut } = makeSut({ institutionId: "NOT_existant_institution" });
        const { finishedCount, totalCount } = await sut.perform();
        expect(totalCount).toBe(0);
        expect(finishedCount).toBe(0);
    });
});

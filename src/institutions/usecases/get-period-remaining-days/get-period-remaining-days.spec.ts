import { addDays } from "date-fns";
import { GetPeriodRemainingDays, GetPeriodRemainingDaysResult } from ".";

type SutType = { sut: GetPeriodRemainingDaysResult};
type SutParams = { daysToAdd: number };

const makeSut = ({ daysToAdd }: SutParams): SutType => {
    const sut = new GetPeriodRemainingDays(addDays(new Date(), daysToAdd));
    return { sut };
};

describe("the period date need to be in the future", () => {
    it("should return an positive number for remaining days", () => {
        const { sut } = makeSut({ daysToAdd: 1 });
        const remainingDays = sut.perform().remainingDays;
        expect(remainingDays).toBeGreaterThan(0);
    });

    it("should throw erro cause the remaining days are not positive", () => {
        const { sut } = makeSut({ daysToAdd: 0 });
        expect(() => sut.perform()).toThrow("The period end date is in the past.");
    });
});

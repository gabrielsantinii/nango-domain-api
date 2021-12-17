import { addDays, differenceInCalendarDays } from "date-fns";
import { GetPeriodRemainingDaysResult, InstitutionById } from "../../interfaces";

class GetPeriodRemainingDays implements GetPeriodRemainingDaysResult {
    constructor(private readonly institutionByIdResult: InstitutionById) {}

    perform() {
        const today = new Date();
        const periodEndDate = this.institutionByIdResult.periodEndDate;
        const remainingDays = differenceInCalendarDays(this.institutionByIdResult.periodEndDate, today);
        const isInFuture = periodEndDate > today;
        if (!isInFuture) {
            throw Error("The period end date is in the past.");
        }
        return { institutionId: this.institutionByIdResult.id, periodEndDate: periodEndDate, remainingDays };
    }
}

type SutType = { sut: GetPeriodRemainingDaysResult; institutionById: InstitutionById };
type SutParams = { daysToAdd: number };

const makeSut = ({ daysToAdd }: SutParams): SutType => {
    const institutionById: InstitutionById = { id: "any", name: "any", periodEndDate: addDays(new Date(), daysToAdd) };
    const sut = new GetPeriodRemainingDays(institutionById);
    return { sut, institutionById };
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

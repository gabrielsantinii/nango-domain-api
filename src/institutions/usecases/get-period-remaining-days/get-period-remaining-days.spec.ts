import { addDays, differenceInCalendarDays } from "date-fns";

interface GetPeriodRemainingDays {
    perform: () => { institutionId: string; periodEndDate: Date; remainingDays: number };
}

class GetPeriodRemainingDaysImp implements GetPeriodRemainingDays {
    constructor(private readonly institutionId: string, private readonly addDays: number) {}

    perform() {
        const today = new Date();
        const todayAfterAddDays = addDays(today, this.addDays);
        const remainingDays = differenceInCalendarDays(todayAfterAddDays, today);
        const isInFuture = todayAfterAddDays > today;
        if (!isInFuture) {
            throw new Error("The period end date is in the past.");
        }
        return { institutionId: this.institutionId, periodEndDate: todayAfterAddDays, remainingDays };
    }
}

describe("the period date need to be in the future", () => {
    it("should return an positive number for remaining days", () => {
        const sut = new GetPeriodRemainingDaysImp("any_institution_id", 5);
        const { remainingDays } = sut.perform();
        expect(remainingDays).toBeGreaterThan(0);
    });

    it("should throw erro cause the remaining days are not positive", () => {
        const sut = new GetPeriodRemainingDaysImp("any_institution_id", 0);
        expect(() => sut.perform()).toThrow("The period end date is in the past.");
    });
});

interface GetPeriodEndDate {
    perform: () => { institutionId: string; periodEndDate: Date };
}

class GetPeriodEndDateSpy implements GetPeriodEndDate {
    constructor(private readonly institutionId: string, private readonly addDays: number) {}

    perform() {
        const today = new Date();
        const todayAfterAddDays = today.setDate(today.getDate() + this.addDays);
        return { institutionId: this.institutionId, periodEndDate: new Date(todayAfterAddDays) };
    }
}

describe("the semestral date need to be in the future", () => {
    it("should return an future date", () => {
        const getPeriodEndDateSpy = new GetPeriodEndDateSpy("any_institution_id", 5);
        const { periodEndDate } = getPeriodEndDateSpy.perform();
        const endDateIsInFuture = periodEndDate > new Date();
        expect(endDateIsInFuture).toBeTruthy();
    });
});

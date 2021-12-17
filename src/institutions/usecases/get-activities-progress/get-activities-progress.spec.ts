interface ActivitiesProgress {
    finishedCount: number;
    totalCount: number;
}

class GetActivitiesProgress {
    perform(): ActivitiesProgress {
        return { finishedCount: 0, totalCount: 1 };
    }
}

describe("get activities progress need to return the totalCount and finishedCount", () => {
    it("the total count must be greater or equal than finishedCount", () => {
        const sut = new GetActivitiesProgress();
        const { finishedCount, totalCount } = sut.perform();
        expect(totalCount).toBeGreaterThanOrEqual(finishedCount);
    });
});

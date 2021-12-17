

interface ActivitiesProgress {
    finishedCount: number;
    totalCount: number;
}

interface GetActivitiesProgressResult {
    perform: () => ActivitiesProgress
}

class GetActivitiesProgress implements GetActivitiesProgressResult {
    perform(): ActivitiesProgress {
        return { finishedCount: 0, totalCount: 1 };
    }
}

const makeSut = (): GetActivitiesProgressResult => {
    return new GetActivitiesProgress()
}

describe("get activities progress need to return the totalCount and finishedCount", () => {
    it("the total count must be greater or equal than finishedCount", () => {
        const sut = makeSut()
        const { finishedCount, totalCount } = sut.perform();
        expect(totalCount).toBeGreaterThanOrEqual(finishedCount);
    });
});

interface ActivitiesProgress {
    finishedCount: number;
    totalCount: number;
}

interface GetActivitiesProgressResult {
    perform: () => Promise<ActivitiesProgress>;
}

interface ActivityByInstitution {
    status: string;
    id: string;
}

interface GetActivitiesByInstitutionIdResult {
    perform: () => Promise<ActivityByInstitution[]>;
}

class GetActivitiesByInstitutionIdSpy implements GetActivitiesByInstitutionIdResult {
    constructor(private readonly institutionId: string) {}
    async perform() {
        return [
            { status: "open", id: "123123" },
            { status: "open", id: "4124312412" },
        ];
    }
}

class GetActivitiesProgress implements GetActivitiesProgressResult {
    constructor(private readonly getActivitiesByInstitutionId: GetActivitiesByInstitutionIdResult) {}

    async perform() {
        const activitiesByInstitutionId = await this.getActivitiesByInstitutionId.perform();
        const finishedActivities = this.filterFinishedActivities(activitiesByInstitutionId);
        return {
            totalCount: activitiesByInstitutionId.length,
            finishedCount: finishedActivities.length,
        };
    }

    private filterFinishedActivities(activities: ActivityByInstitution[]): ActivityByInstitution[] {
        return activities.filter((activity) => activity.status === "finished");
    }
}

type SutType = {
    sut: GetActivitiesProgressResult;
    getActivitiesByInstitutionIdSpy: GetActivitiesByInstitutionIdResult;
};

const makeSut = (): SutType => {
    const getActivitiesByInstitutionIdSpy = new GetActivitiesByInstitutionIdSpy("any_org_id");
    const sut = new GetActivitiesProgress(getActivitiesByInstitutionIdSpy);
    return { sut, getActivitiesByInstitutionIdSpy };
};

describe("get activities progress need to return the totalCount and finishedCount", () => {
    it("the total count must be greater or equal than finishedCount", async () => {
        const { sut } = makeSut();
        const { finishedCount, totalCount } = await sut.perform();
        expect(totalCount).toBeGreaterThanOrEqual(finishedCount);
    });
});

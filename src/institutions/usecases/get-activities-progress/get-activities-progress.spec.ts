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
    institutionId: string;
}

interface GetActivitiesByInstitutionIdResult {
    perform: () => Promise<ActivityByInstitution[]>;
}

class GetActivitiesByInstitutionIdSpy implements GetActivitiesByInstitutionIdResult {
    constructor(private readonly institutionId: string) {}
    private readonly existantActivities: ActivityByInstitution[] = [
        { status: "finished", id: "123123", institutionId: "existant_institution" },
        { status: "finished", id: "4124312412", institutionId: "existant_institution" },
    ];

    async perform() {
        const activitiesByInstitutionId = this.existantActivities.filter(
            (activity) => activity.institutionId === this.institutionId
        );
        return activitiesByInstitutionId;
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

type SutParams = {
    institutionId: string
};

const makeSut = ({ institutionId }: SutParams): SutType => {
    const getActivitiesByInstitutionIdSpy = new GetActivitiesByInstitutionIdSpy(institutionId);
    const sut = new GetActivitiesProgress(getActivitiesByInstitutionIdSpy);
    return { sut, getActivitiesByInstitutionIdSpy };
};

describe("get activities progress need to return the totalCount and finishedCount", () => {
    it("the total count must be greater or equal than finishedCount", async () => {
        const { sut } = makeSut({ institutionId: 'existant_institution' });
        const { finishedCount, totalCount } = await sut.perform();
        expect(totalCount).toBeGreaterThanOrEqual(finishedCount);
    });

    it("the total and finished count must be 0 if has no related activities to the institution", async () => {
        const { sut } = makeSut({ institutionId: 'NOT_existant_institution' });
        const { finishedCount, totalCount } = await sut.perform();
        expect(totalCount).toBe(0);
        expect(finishedCount).toBe(0);
    });
});

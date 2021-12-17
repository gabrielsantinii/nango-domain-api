export interface ActivitiesProgress {
    finishedCount: number;
    totalCount: number;
}

export interface GetActivitiesProgressResult {
    perform: () => Promise<ActivitiesProgress>;
}
export interface GetPeriodRemainingDaysResult {
    perform: () => { institutionId: string; periodEndDate: Date; remainingDays: number };
}
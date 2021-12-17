export interface RemainingDaysByInstitution {
    remainingDays: number
}

export interface GetPeriodRemainingDaysResult {
    perform: () => RemainingDaysByInstitution
}
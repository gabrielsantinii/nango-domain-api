import { differenceInCalendarDays } from "date-fns";
import { GetPeriodRemainingDaysResult, InstitutionById } from "../../interfaces";

export class GetPeriodRemainingDays implements GetPeriodRemainingDaysResult {
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
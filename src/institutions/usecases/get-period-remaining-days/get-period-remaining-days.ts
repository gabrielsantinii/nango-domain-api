import { differenceInCalendarDays } from "date-fns";
import { GetPeriodRemainingDaysResult, InstitutionById } from "../../interfaces";

export class GetPeriodRemainingDays implements GetPeriodRemainingDaysResult {
    constructor(private readonly institutionById: InstitutionById) {}

    perform() {
        const today = new Date();
        const periodEndDate = this.institutionById.periodEndDate;
        const remainingDays = differenceInCalendarDays(this.institutionById.periodEndDate, today);
        const isInFuture = periodEndDate > today;
        if (!isInFuture) {
            throw Error("The period end date is in the past.");
        }
        return { remainingDays };
    }
}

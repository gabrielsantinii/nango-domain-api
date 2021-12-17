import { differenceInCalendarDays } from "date-fns";
import { GetPeriodRemainingDaysResult } from ".";

export class GetPeriodRemainingDays implements GetPeriodRemainingDaysResult {
    constructor(private readonly periodEndDate: Date) {}

    perform() {
        const today = new Date();
        const periodEndDate = this.periodEndDate;
        const remainingDays = differenceInCalendarDays(this.periodEndDate, today);
        const isInFuture = periodEndDate > today;
        if (!isInFuture) {
            throw Error("The period end date is in the past.");
        }
        return { remainingDays };
    }
}

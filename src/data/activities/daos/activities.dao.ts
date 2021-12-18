import { ActivitiesDaoResult } from ".";
import { ActivityModelType } from "../models";

export class ActivitiesDao implements ActivitiesDaoResult {
    constructor(private readonly Activity: ActivityModelType) {}

    async findByInstitutionId(institutionId: string) {
        return this.Activity.find({ institutionId }).exec();
    }
}

import { ClassesDaoResult } from ".";
import { ClassModelType } from "../models";

export class ClassesDao implements ClassesDaoResult {
    constructor(private readonly ClassModel: ClassModelType) {}

    async findByInstitutionId(institutionId: string) {
        return this.ClassModel.find({ institutionId }).exec();
    }
}

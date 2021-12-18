import { InstitutionsDaoResult } from ".";
import { logDataFactory } from "../../../shared/factories";
import { CreateInstitutionDto } from "../dtos";
import { InstitutionModelType } from "../models";

export class InstitutionsDao implements InstitutionsDaoResult {
    constructor(private readonly Institution: InstitutionModelType) {}

    async findById(id: string) {
        return this.Institution.findOne({ id }).exec();
    }

    async create(institutionData: CreateInstitutionDto) {
        const institution = new this.Institution({ ...institutionData, ...logDataFactory() });
        return institution.save();
    }
}

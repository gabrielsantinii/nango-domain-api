import { InstitutionsDaoResult } from ".";
import { InstitutionModelType } from "../models";
import { mongo } from "mongoose";

export class InstitutionsDao implements InstitutionsDaoResult {
    constructor(private readonly Institution: InstitutionModelType) {}

    async findById(id: string) {
        return this.Institution.findOne({ id }).exec();
    }
}

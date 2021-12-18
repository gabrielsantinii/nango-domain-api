import { UsersDaoResult } from ".";
import { UserModelType } from "../models";

export class UsersDao implements UsersDaoResult {
    constructor(private readonly User: UserModelType) {}

    async findById(id: string) {
        return this.User.findOne({ id }).exec();
    }

    async findStudentsByInstitutionId(institutionId: string) {
        return this.User.find({ profileType: "student", institutions: { $in: institutionId } }).exec();
    }

    async findEmployeesByInstitutionId(institutionId: string) {
        return this.User.find({ profileType: { $ne: "student" }, institutions: { $in: institutionId } }).exec();
    }
}

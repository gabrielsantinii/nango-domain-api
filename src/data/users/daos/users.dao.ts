import { UsersDaoResult } from ".";
import { CreateUserDto } from "../dtos/create.user.dto";
import { UserModelType } from "../models";
import { v4 as uuidFactory } from "uuid";

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

    async create(userData: CreateUserDto) {
        const newUser = new this.User({ ...userData, id: uuidFactory() });

        return newUser.save();
    }
}

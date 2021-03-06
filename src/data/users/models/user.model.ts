import { Document, Schema, model, Model } from "mongoose";
import { Status } from "../../../shared/enums";
import { ReadUserDto } from "../dtos";
import { UserProfileType } from "../enums";

type IUserModel = ReadUserDto & Document;

const UserSchema: Schema<IUserModel> = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        displayName: { type: String, required: true },
        birthday: Date,
        profileType: { type: String, enum: Object.values(UserProfileType) },
        cpfCnpj: { type: String },
        email: { type: String, required: true },
        institutions: [{ type: String, required: true }],
        phone: { type: String, required: true },
        photoUrl: { type: String, default: "" },
        authId: { type: String, required: true },
        address: {
            required: false,
            country: { type: String, required: false },
            postalCode: { type: String, default: "" },
            city: { type: String, required: false },
            street: { type: String, default: "" },
            state: { type: String, required: false },
        },
        createdAt: { type: Date, required: true },
        updatedAt: { type: Date, required: true },
        id: { type: String, required: true },
        status: { type: String, required: true, enum: Object.values(Status) },
    }
);
const UserModel = model<IUserModel>("users", UserSchema);

type UserModelType = Model<IUserModel>;

export { UserModel, UserModelType };

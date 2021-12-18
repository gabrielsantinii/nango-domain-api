import { Document, Schema, model, Model } from "mongoose";
import { ReadUserDto } from "../dtos";

type IUserModel = ReadUserDto & Document;

const UserSchema: Schema<IUserModel> = new Schema();
const UserModel = model<IUserModel>("users", UserSchema);

type UserModelType = Model<IUserModel>;

export { UserModel, UserModelType };

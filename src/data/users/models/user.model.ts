import { Document, Schema, model, Model } from "mongoose";
import { UserDto } from "../dtos";

type IUserModel = UserDto & Document;

const UserSchema: Schema<IUserModel> = new Schema();
const UserModel = model<IUserModel>("users", UserSchema);

type UserModelType = Model<IUserModel>;

export { UserModel, UserModelType };

import { Document, Schema, model, Model } from "mongoose";
import { ClassDto } from "../dtos";

type IClassModel = ClassDto & Document;

const ClassSchema: Schema<IClassModel> = new Schema();
const ClassModel = model<IClassModel>("classes", ClassSchema);

type ClassModelType = Model<IClassModel>;

export { ClassModel, ClassModelType };
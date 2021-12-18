import { Document, Schema, model, Model } from "mongoose";
import { ActivityDto } from "../dtos";

type IActivityModel = ActivityDto & Document;

const ActivitySchema: Schema<IActivityModel> = new Schema();
const ActivityModel = model<IActivityModel>("activities", ActivitySchema);

type ActivityModelType = Model<IActivityModel>;

export { ActivityModel, ActivityModelType };
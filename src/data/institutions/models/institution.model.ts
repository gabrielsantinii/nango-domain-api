import { Document, Schema, model, Model } from "mongoose";
import { InstitutionDto } from "../dtos";

export type IInstitutionModel = InstitutionDto & Document

const InstitutionSchema: Schema<IInstitutionModel> = new Schema();
const InstitutionModel = model<IInstitutionModel>("institutions", InstitutionSchema);

type InstitutionModelType = Model<IInstitutionModel>

export { InstitutionModel, InstitutionModelType };

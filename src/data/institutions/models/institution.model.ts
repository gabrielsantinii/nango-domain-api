import { addMonths } from "date-fns";
import { Document, Schema, model, Model } from "mongoose";
import { Status } from "../../../shared/enums";
import { ReadInstitutionDto } from "../dtos";
import { InstitutionCategory } from "../enums";

type InstitutionDocument = ReadInstitutionDto & Document;

const InstitutionSchema: Schema<InstitutionDocument> = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    website: { type: String },
    rangeOfStudents: { type: String, required: true },
    periodEndDate: { type: Date, required: true, default: addMonths(new Date(), 6) },
    categories: { type: [String], required: true, enum: Object.values(InstitutionCategory) },

    rangeOfEmployees: { type: String, required: true },
    photoUrl: { type: String, required: true, default: "" },
    address: {
        country: { type: String, required: true },
        postalCode: { type: String, default: "" },
        city: { type: String, required: true },
        street: { type: String, default: "" },
        state: { type: String, required: true },
    },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    id: { type: String, required: true },
    status: { type: String, required: true, enum: Object.values(Status) },
});
const InstitutionModel = model<InstitutionDocument>("institutions", InstitutionSchema);

type InstitutionModelType = Model<InstitutionDocument>;

export { InstitutionModel, InstitutionModelType };

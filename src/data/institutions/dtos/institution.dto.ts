import { Address } from "../../../shared/interfaces";
import { InstitutionCategoryType } from "../types";

export interface InstitutionDto {
    name: string;
    categories: InstitutionCategoryType[];
    email: string;
    website: string;
    contactPersonId: string;
    address: Address;
    rangeOfEmployees: string;
    rangeOfStudents: string;
    createdAt: Date;
    updatedAt: Date;
    inactivatedAt?: Date;
    inactivationReason?: string;
}

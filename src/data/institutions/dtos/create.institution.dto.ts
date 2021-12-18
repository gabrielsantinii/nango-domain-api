import { Address } from "../../../shared/interfaces";
import { InstitutionCategoryType } from "../enums";

export interface CreateInstitutionDto {
    name: string;
    categories: InstitutionCategoryType[];
    email: string;
    website: string;
    contactPersonId: string;
    address: Address;
    rangeOfEmployees: string;
    rangeOfStudents: string;
    periodEndDate: Date;
    photoUrl: string;
}
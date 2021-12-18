import { LogDto } from "../../../shared/dtos";
import { Address } from "../../../shared/interfaces";
import { InstitutionCategoryType } from "../types";

export interface InstitutionDto extends LogDto {
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

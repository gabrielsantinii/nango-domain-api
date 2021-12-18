import { Address } from "../../../shared/interfaces";
import { InstitutionCategory } from "../enums";

export interface CreateInstitutionDto {
    name: string;
    categories: InstitutionCategory[];
    email: string;
    website: string;
    contactPersonId: string;
    address: Address;
    rangeOfEmployees: string;
    rangeOfStudents: string;
    periodEndDate: Date;
    photoUrl: string;
}
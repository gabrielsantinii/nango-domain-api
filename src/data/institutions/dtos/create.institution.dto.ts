import { Address } from "../../../shared/interfaces";
import { InstitutionCategory } from "../enums";

export interface CreateInstitutionDto {
    name: string;
    categories: InstitutionCategory[];
    website: string;
    address: Address;
    rangeOfEmployees: string;
    rangeOfStudents: string;
    periodEndDate: Date;
    photoUrl?: string;
    contactPerson: {
        name: string;
        email: string;
        phone: string;
    };
}

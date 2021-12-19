import { CreateInstitutionDto } from "../../data/institutions/dtos";
import { InstitutionCategory } from "../../data/institutions/enums";
import { AddressTestUtils } from "../../shared/__tests__";

export class InstitutionsTestUtils {
    static getValidInstitution(): CreateInstitutionDto {
        return {
            name: "Valid",
            email: "valid@gmail.com",
            periodEndDate: new Date(),
            photoUrl: "",
            rangeOfEmployees: "11-100",
            rangeOfStudents: "11-100",
            website: "any website",
            categories: [InstitutionCategory.college],
            address: AddressTestUtils.getValidAddress(),
            contactPerson: {
                name: "person 1",
                email: "emal@gmail.com",
                phone: "47988210231",
            },
        };
    }
}

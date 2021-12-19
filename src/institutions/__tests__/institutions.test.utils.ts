import { CreateInstitutionDto } from "../../data/institutions/dtos";
import { InstitutionCategory } from "../../data/institutions/enums";
import { AddressTestUtils } from "../../shared/__tests__";

export class InstitutionsTestUtils {
    static getValidInstitution(): CreateInstitutionDto {
        return {
            name: "Valid",
            periodEndDate: new Date(),
            photoUrl: "",
            rangeOfEmployees: "11-100",
            rangeOfStudents: "11-100",
            website: "any website",
            categories: [InstitutionCategory.college],
            address: AddressTestUtils.getValidAddress(),
            contactPerson: {
                firstName: "person 1",
                lastName: "person 2",
                email: "emal@gmail.com",
                phone: "47988210231",
                pass: "1233",
            },
        };
    }
}

import { ValidationChain, body } from "express-validator";
export class ValidateInstitutionFields {
    getValidationList(): ValidationChain[] {
        return [
            body("name").notEmpty().isString(),
            body("categories").notEmpty().isArray(),
            body("website").isString(),
            body("rangeOfEmployees").notEmpty().isString(),
            body("rangeOfStudents").notEmpty().isString(),
            body("periodEndDate").optional().isDate(),
            body("photoUrl").optional().isString(),
            body("contactPerson.name").notEmpty().bail().isString(),
            body("contactPerson.email").notEmpty().bail().isEmail(),
            body("contactPerson.phone").notEmpty().bail().isString().bail().isLength({ min: 7, max: 12 }),
            body("address.city").notEmpty().bail().isString(),
            body("address.state").notEmpty().bail().isString(),
            body("address.country").notEmpty().bail().isString(),
            body("address.street").optional().isString(),
            body("address.postalCode").optional().isString(),
        ];
    }
}

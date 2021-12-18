import { ValidationChain, body } from "express-validator";
export class ValidateInstitutionFields {
    getValidationList(): ValidationChain[] {
        return [
            body("name").notEmpty().isString(),
            body("categories").notEmpty().isString(),
            body("email").notEmpty().isEmail(),
            body("website").notEmpty().isString(),
            body("rangeOfEmployees").notEmpty().isString(),
            body("rangeOfStudents").notEmpty().isString(),
            body("periodEndDate").optional().isDate(),
            body("photoUrl").notEmpty().isString(),
            body("contactPerson.name").notEmpty().isString(),
            body("contactPerson.email").notEmpty().isEmail(),
            body("contactPerson.phone").notEmpty().isString().isLength({ min: 7, max: 12 })
        ];
    }
}

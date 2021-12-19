import { NextFunction, Request, Response } from "express";
import { validationResult, Result as ValidationResult, ValidationError } from "express-validator";

export class ResultValidationMiddleware {
    verifyAndReturnErrors = (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        const formattedErrors = this.formatErrors(errors);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: formattedErrors,
            });
        }

        next();
    };

    formatErrors = (errors: ValidationResult<ValidationError>) => {
        return errors
            .formatWith((err) => ({
                message: err.msg,
                field: err.param,
                value: err.value,
            }))
            .array();
    };
}

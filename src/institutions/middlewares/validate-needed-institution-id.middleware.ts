import { NextFunction, Request, Response } from "express";

export class ValidateNeededInstitutionId {
    async validate(request: Request, response: Response, next: NextFunction) {
        const institutionId = request.params.institutionId;
        if (!institutionId) {
            response.statusCode = 400;
            return response.json({ errors: ["The institutionId is mandatory."] });
        }
        next();
    }
}

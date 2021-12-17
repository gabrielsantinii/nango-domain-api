import { NextFunction, Request, Response } from "express";
import { GetInstitutionById } from "../usecases";

export class GetInstitutionByIdMiddleware {
    async perform(request: Request, response: Response, next: NextFunction) {
        try {
            const institutionId = request.params.institutionId;
            const getInstitutionById = new GetInstitutionById(institutionId);
            const institution = await getInstitutionById.perform();
            request.body.institution = institution;
            next()
        } catch (err: any) {
            response.statusCode = 400;
            return response.json({ errors: [err.message] });
        }
    }
}

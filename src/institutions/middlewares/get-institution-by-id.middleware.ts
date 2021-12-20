import { NextFunction, Request, Response } from "express";
import { InstitutionsDao } from "../../data/institutions/daos";
import { InstitutionModel } from "../../data/institutions/models";
import { GetInstitutionById } from "../usecases/get-institution-by-id";

export class GetInstitutionByIdMiddleware {
    async perform(request: Request, response: Response, next: NextFunction) {
        try {
            const institutionId = request.body.institutionId;
            const institutionsDao = new InstitutionsDao(InstitutionModel);
            console.log("Insitution Id: ", institutionId);
            const getInstitutionById = new GetInstitutionById(institutionId, institutionsDao);
            const institution = await getInstitutionById.perform();
            request.body.institution = institution;
            next();
        } catch (err: any) {
            response.statusCode = 400;
            return response.json({ errors: [err.message] });
        }
    }
}

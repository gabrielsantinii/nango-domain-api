import { NextFunction, Request, Response } from "express";

export class ValidateNeededAuthId {
    async validate(request: Request, response: Response, next: NextFunction) {
        const authId = request.params.authId;
        if (!authId) {
            response.statusCode = 400;
            return response.json({ errors: ["The authId is mandatory."] });
        }
        next();
    }
}

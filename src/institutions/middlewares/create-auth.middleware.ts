import { NextFunction, Request, Response } from "express";
import { generate as shortIdFactory } from 'shortid'
import firebaseAdmin from "firebase-admin";
import { CreateInstitutionDto } from "../../data/institutions/dtos";

export class CreateAuthMiddleware {
    async perform(request: Request, response: Response, next: NextFunction) {
        try {
            const institutionData = request.body as CreateInstitutionDto;
            const authEmail = institutionData.contactPerson.email;
            const createdAuth = await firebaseAdmin.auth().createUser({ email: authEmail, password: shortIdFactory()})
            if (!createdAuth.uid) {
                throw new Error("uid não foi gerado.");
            }
            request.body.createdAuthUid = createdAuth.uid;
            next();
        } catch (err: any) {
            response.statusCode = 206;
            response.json({
                errors: [
                    {
                        message:
                            "A instituição foi criada com sucesso, no entanto não foi possível criar as credenciais para a pessoa de contato.",
                        error: err.message,
                    },
                ],
            });
        }
    }
}

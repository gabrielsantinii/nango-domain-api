import { NextFunction, Request, Response } from "express";
import { CreateInstitutionDto } from "../../data/institutions/dtos";
import { CreateAuth } from "../../auth/usecases";

export class CreateAuthForContactPersonMiddleware {
     perform = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const institutionData = request.body as CreateInstitutionDto;
            const authEmail = institutionData.contactPerson.email;
            const authPass = institutionData.contactPerson.pass;
            const createdAuth = await this.createAuth({ email: authEmail, password: authPass });
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

    private createAuth = async ({ email, password }: { email: string; password: string }) => {
        const createAuthUseCase = new CreateAuth(email, password);
        const createdAuth = await createAuthUseCase.perform();
        return createdAuth;
    };
}

import { NextFunction, Request, Response } from "express";
import { InstitutionsDao } from "../../data/institutions/daos";
import { CreateInstitutionDto, ReadInstitutionDto } from "../../data/institutions/dtos";
import { InstitutionModel } from "../../data/institutions/models";
import { CreateInstitution } from "../usecases/create-institution";

export class CreateInstitutionMiddleware {
    perform = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const institutionData = request.body as CreateInstitutionDto;
            const createdInstitution = await this.createInstitution(institutionData);
            request.body.createdInstitution = createdInstitution;
            next();
        } catch (err: any) {
            response.statusCode = 500;
            response.json({
                errors: [
                    { message: "Erro ao criar a instituição. Entre em contato com o suporte.", error: err.message },
                ],
            });
        }
    };

    private async createInstitution(institutionData: CreateInstitutionDto): Promise<ReadInstitutionDto> {
        const institutionsDao = new InstitutionsDao(InstitutionModel);
        const createInstitutionUseCase = new CreateInstitution(institutionData, institutionsDao);
        const savedInstitution = await createInstitutionUseCase.perform();
        return savedInstitution;
    }
}

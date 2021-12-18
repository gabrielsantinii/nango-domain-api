import { NextFunction, Request, Response } from "express";
import { InstitutionsDao } from "../../data/institutions/daos";
import { CreateInstitutionDto, ReadInstitutionDto } from "../../data/institutions/dtos";
import { InstitutionModel } from "../../data/institutions/models";
import { CreateInstitution } from "../usecases/create-institution";

export class CreateInstitutionController {
    async perform(request: Request, response: Response, next: NextFunction) {
        const institutionData = request.body as CreateInstitutionDto;
        const savedInstitution = await this.createInstitution(institutionData);
        return response.json({ data: savedInstitution })
    }

    private async createInstitution(institutionData: CreateInstitutionDto): Promise<ReadInstitutionDto> {
        const institutionsDao = new InstitutionsDao(InstitutionModel);
        const createInstitutionUseCase = new CreateInstitution(institutionData, institutionsDao);
        const savedInstitution = await createInstitutionUseCase.perform();
        return savedInstitution;
    }
}

import { NextFunction, Request, Response } from "express";
import { CreateInstitutionDto } from "../../data/institutions/dtos";
import { UsersDao } from "../../data/users/daos";
import { CreateUserDto, ReadUserDto } from "../../data/users/dtos";
import { UserProfileType } from "../../data/users/enums";
import { UserModel } from "../../data/users/models";
import { CreateUser } from "../../users/usecases/create-user";

export class CreateUserMiddleware {
    perform = async (request: Request, response: Response, next: NextFunction) => {
        const institutionData = request.body as CreateInstitutionDto;
        try {
            const createdInstitution = request.body.createdInstitution;
            const createdAuthId = request.body.createdAuthUid;
            const formattedUserData = this.formatUser(
                institutionData.contactPerson,
                createdInstitution.id,
                createdAuthId
            );
            const createdUser = await this.createUser(formattedUserData);
            return response.json({
                data: { createdUser, createdInstitution },
                message:
                    "Instituição, criada com sucesso! Em alguns instantes, " +
                    institutionData.contactPerson.firstName +
                    " receberá um e-mail com os dados de acesso.",
            });
        } catch (err: any) {
            response.statusCode = 500;
            response.json({
                errors: [
                    {
                        message:
                            "Erro ao criar os dados de acesso para " +
                            institutionData.contactPerson.firstName +
                            ". Entre em contato com o suporte.",
                        error: err.message,
                    },
                ],
            });
        }
    };

    private createUser = async (userData: CreateUserDto): Promise<ReadUserDto> => {
        const usersDao = new UsersDao(UserModel);

        const createUserUseCase = new CreateUser(userData, usersDao);
        const createdUser = await createUserUseCase.perform();
        return createdUser;
    };

    private formatUser = (
        userData: { firstName: string; lastName: string; pass: string; email: string; phone: string },
        institutionId: string,
        authId: string
    ): CreateUserDto => {
        return {
            authId,
            displayName: `${userData.firstName} ${userData.lastName}`,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            institutions: [institutionId],
            phone: userData.phone,
            profileType: UserProfileType.admin,
        };
    };
}

import { NextFunction, Request, Response } from "express";
import { UsersDao } from "../../data/users/daos";
import { UserModel } from "../../data/users/models";
import { GetUserByAuthId } from "../../users/usecases/get-user-by-authId";

export class GetInstitutionIdByAuthId {
     perform = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const authId = request.params.authId;
            const user = await this.getUserByAuthId(authId);
            request.body.institutionId = user.institutions[0];
            next();
        } catch (err: any) {
            response.statusCode = 400;
            return response.json({ errors: [err.message] });
        }
    }

    private getUserByAuthId = async (authId: string) => {
        const usersDao = new UsersDao(UserModel);
        const getUserByAuthIdUseCase = new GetUserByAuthId(authId, usersDao);
        const user = await getUserByAuthIdUseCase.perform();
        if (!user) throw new Error(`Usuário com authId ${authId} não encontrado`);
        return user;
    };
}

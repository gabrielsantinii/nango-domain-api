import { Application } from "express";
import { SharedRoutesConfig } from "../shared";
import { ResultValidationMiddleware } from "../shared/middlewares";
import { MountDashboardController } from "./controllers";
import {
    GetInstitutionByIdMiddleware,
    ValidateNeededAuthId,
    ValidateInstitutionFields,
    CreateInstitutionMiddleware,
    CreateUserMiddleware,
    CreateAuthForContactPersonMiddleware,
    GetInstitutionIdByAuthId,
} from "./middlewares";

const mountDashboardController = new MountDashboardController();
const getInstitutionByIdMiddleware = new GetInstitutionByIdMiddleware();
const validateNeededAuthId = new ValidateNeededAuthId();

const validateInstitutionFields = new ValidateInstitutionFields();
const createInstitution = new CreateInstitutionMiddleware();
const createAuth = new CreateAuthForContactPersonMiddleware();
const createUser = new CreateUserMiddleware();

const getInstitutionIdByAuthId = new GetInstitutionIdByAuthId();

const resultValidationMiddleware = new ResultValidationMiddleware();

export class InstitutionsRoutesConfig extends SharedRoutesConfig {
    constructor(app: Application) {
        super(app, "institutions-routes", "/institutions");
    }

    configureRoutes(): Application {
        this.app.post(`${this.path}`, [
            ...validateInstitutionFields.getValidationList(),
            resultValidationMiddleware.verifyAndReturnErrors,
            createInstitution.perform,
            createAuth.perform,
            createUser.perform,
        ]);

        this.app.get(`${this.path}/:authId/dashboard`, [
            validateNeededAuthId.validate,
            getInstitutionIdByAuthId.perform,
            getInstitutionByIdMiddleware.perform,
            mountDashboardController.perform,
        ]);

        return this.app;
    }
}

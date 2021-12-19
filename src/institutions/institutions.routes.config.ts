import { Application } from "express";
import { SharedRoutesConfig } from "../shared";
import { ResultValidationMiddleware } from "../shared/middlewares";
import { MountDashboardController } from "./controllers";
import {
    GetInstitutionByIdMiddleware,
    ValidateNeededInstitutionId,
    ValidateInstitutionFields,
    CreateInstitutionMiddleware,
    CreateUserMiddleware,
    CreateAuthMiddleware,
} from "./middlewares";

const mountDashboardController = new MountDashboardController();
const getInstitutionByIdMiddleware = new GetInstitutionByIdMiddleware();
const validateNeededInstitutionId = new ValidateNeededInstitutionId();

const validateInstitutionFields = new ValidateInstitutionFields();
const createInstitution = new CreateInstitutionMiddleware();
const createAuth = new CreateAuthMiddleware();
const createUser = new CreateUserMiddleware();

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

        this.app.get(`${this.path}/:institutionId/dashboard`, [
            validateNeededInstitutionId.validate,
            getInstitutionByIdMiddleware.perform,
            mountDashboardController.perform,
        ]);

        return this.app;
    }
}

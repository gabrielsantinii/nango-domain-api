import { Application } from "express";
import { SharedRoutesConfig } from "../shared";
import { MountDashboardController, CreateInstitutionController } from "./controllers";
import { GetInstitutionByIdMiddleware, ValidateNeededInstitutionId, ValidateInstitutionFields } from "./middlewares";

const mountDashboardController = new MountDashboardController();
const getInstitutionByIdMiddleware = new GetInstitutionByIdMiddleware();
const validateNeededInstitutionId = new ValidateNeededInstitutionId();

const validateInstitutionFields = new ValidateInstitutionFields();
const createInstitutionController = new CreateInstitutionController();

export class InstitutionsRoutesConfig extends SharedRoutesConfig {
    constructor(app: Application) {
        super(app, "institutions-routes", "/institutions");
    }

    configureRoutes(): Application {
        this.app.post(`${this.path}`, [
            ...validateInstitutionFields.getValidationList(),
            createInstitutionController.perform,
        ]);

        this.app.get(`${this.path}/:institutionId/dashboard`, [
            validateNeededInstitutionId.validate,
            getInstitutionByIdMiddleware.perform,
            mountDashboardController.perform,
        ]);

        return this.app;
    }
}

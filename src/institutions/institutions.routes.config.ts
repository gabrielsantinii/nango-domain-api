import { Application } from "express";
import { SharedRoutesConfig } from "../shared";
import { MountDashboardController } from "./controllers";
import { GetInstitutionByIdMiddleware, ValidateNeededInstitutionId } from "./middlewares";

const mountDashboardController = new MountDashboardController();
const getInstitutionByIdMiddleware = new GetInstitutionByIdMiddleware();
const validateNeededInstitutionId = new ValidateNeededInstitutionId();

export class InstitutionsRoutesConfig extends SharedRoutesConfig {
    constructor(app: Application) {
        super(app, "institutions-routes", "/institutions/:institutionId");
    }

    configureRoutes(): Application {
        this.app.get(`${this.path}/dashboard`, [
            validateNeededInstitutionId.validate,
            getInstitutionByIdMiddleware.perform,
            mountDashboardController.perform,
        ]);

        return this.app;
    }
}

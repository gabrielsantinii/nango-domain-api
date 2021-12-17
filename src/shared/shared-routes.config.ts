import { Application } from "express";

export abstract class SharedRoutesConfig {
    constructor(readonly app: Application, readonly name: string, readonly path: string) {
        this.configureRoutes();
    }
    getName() {
        return this.name;
    }

    abstract configureRoutes(): Application;
}

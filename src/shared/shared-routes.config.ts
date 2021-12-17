import { Application } from "express";

export abstract class SharedRoutesConfig {
    readonly app: Application;
    readonly name: string;
    readonly path: string;

    constructor(app: Application, name: string, path: string) {
        this.app = app;
        this.name = name;
        this.path = path;
        this.configureRoutes();
    }
    getName() {
        return this.name;
    }

    abstract configureRoutes(): Application;
}

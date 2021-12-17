import express from "express";
import cors from "cors";
import { SharedRoutesConfig } from "./shared";
import { InstitutionsRoutesConfig } from "./institutions";

const app = express();
const routes: SharedRoutesConfig[] = [];

app.use(express.json());
app.use(cors());

routes.push(new InstitutionsRoutesConfig(app));

export { app, routes };

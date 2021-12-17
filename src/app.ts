import express from "express";
import cors from "cors";
import { SharedRoutesConfig } from './shared'



const app = express();
const routes: SharedRoutesConfig[] = [];

app.use(express.json());
app.use(cors());

export { app, routes }
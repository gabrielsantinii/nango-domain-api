import http from "http";
import dotenv from 'dotenv'
import { app, routes } from "./app";

import { FirebaseService, MongooseService } from './shared/services'

dotenv.config()
MongooseService.init()
FirebaseService.init()

const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port, () => {
    routes.forEach((route) => {
        console.log(`Routes configured for ${route.getName()} - "${route.path}"`);
    });

    console.log("Server is running!");
});

export { app };

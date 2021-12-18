import http from "http";
import { app, routes } from "./app";
import './shared/services/mongoose.service'

const port = 8080;
const server = http.createServer(app);
server.listen(port, () => {
    routes.forEach((route) => {
        console.log(`Routes configured for ${route.getName()} - "${route.path}"`);
    });

    console.log("Server is running!");
});

export { app };

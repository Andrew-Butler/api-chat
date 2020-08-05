
import express, { Express } from "express";
import cors from "cors";
import compression from "compression";

import RouteObject from "./api/route/index";

export default class {

    private app: Express;

    constructor () {
        this.app = express();

        this.applyMiddleware();
        this.applyRoutes();
    }

    private applyMiddleware () {
        this.app.use(cors());
        this.app.use(compression());
    }

    private applyRoutes () {
        new RouteObject.ChatRoute(this.app);
    }

    public getApp (): Express {
        return this.app;
    }

}
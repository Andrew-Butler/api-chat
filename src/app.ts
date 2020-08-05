
import express, { Express } from "express";
import cors from "cors";
import compression from "compression";
import { Sequelize } from "sequelize";

import RouteObject from "./api/route/index";
import AppDatabase from "./core/database/index";

export default class {

    private app: Express;
    private sequelize: Sequelize;

    constructor () {
        this.app = express();

        this.connectDatabase();
        this.applyMiddleware();
        this.applyRoutes();
    }

    private connectDatabase () {
        const processVars = process.env;

        this.sequelize = AppDatabase;
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
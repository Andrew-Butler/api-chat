import { Express } from "express";

export default class Route {

    protected express: Express;
    private baseUrl: string = "/api";

    constructor(app: Express) {
        this.express = app;

        this.applyRoutes(app, this.getUrl());
    }

    protected applyRoutes (app: Express, baseUrl: string) 
    {
        console.log("override me");
    }

    protected getUrl (): string {
        return `${this.baseUrl}`;
    }

}
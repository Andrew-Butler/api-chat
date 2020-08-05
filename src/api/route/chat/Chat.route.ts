import { Express } from "express";
import Route from "../route";

import ChatController from "../../controller/chat/chat.controller";

export default class ChatRoute extends Route {

    protected url: string = "/chat/new"

    constructor(app: Express) {
        super(app);
    }

    protected applyRoutes (app: Express, baseUrl: string) {
        const controller = new ChatController();
        
        app.post(`${baseUrl}/chat/new`, controller.newChat);
    }

}
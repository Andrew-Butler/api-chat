import BaseController from "../Index.controller";

import { Request, Response, NextFunction } from "express";

export default class ChatController extends BaseController {

    public newChat (req: Request, res: Response, next: NextFunction) {
        res.send("Hi chloe");
    }

}
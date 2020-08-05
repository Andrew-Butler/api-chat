import { Model } from "sequelize/types";

export abstract class Repository {

    protected model: Model;
    
    
    constructor(model : Model) {
        this.model = model;
    }

}
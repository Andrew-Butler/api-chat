import { Model } from "sequelize/types";

const store = {

};

export function storeAddModel (name: string, model: any) {
    store[name] = model;
}

export function storeGetModel (name): any {
    const model = store[name] ? store[name]: null;
    
    if(!model) {
        throw new Error(`Model '${name}' doesn't exist`);
    }

    return model;
}
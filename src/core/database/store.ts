import { Model } from "sequelize/types";

const STORE = {

};

export function storeAddModel (name: string, model: any) {
    STORE[name] = model;
}

export function storeGetModel (name): any {
    const model = STORE[name] ? STORE[name]: null;

    if(!model) {
        throw new Error(`Model '${name}' doesn't exist`);
    }

    return model;
}

export function storeGetAll () {
    return STORE;
}
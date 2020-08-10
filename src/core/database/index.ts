import { Sequelize, Dialect } from "sequelize";

//app imports
import { storeAddModel, storeGetModel, storeGetAll } from "./store";
import { ChatFactory } from "./model/chat.model";

const processVars = process.env;

function getDbDialect (text: any): Dialect {
    const text2: Dialect = text;

    console.log(text2);


    return text2;
}

//init sequelize
const db = new Sequelize (
    processVars.APP_DB_NAME, processVars.APP_DB_USER, processVars.APP_DB_PASS, {
        host: processVars.APP_DB_HOST,
        port: parseInt(processVars.APP_DB_PORT),
        dialect: "mysql"
    }
);

//load our models
const ChatModel = ChatFactory(db);

//add them to the store
storeAddModel("chats", ChatModel);

db.authenticate();
db.sync({force: true});

export default db;
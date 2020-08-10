import sequelize, { Sequelize, Dialect } from "sequelize";
import { storeAddModel, storeGetModel } from "./store";

const processVars = process.env;

function getDbDialect (text: any): Dialect {
    const text2: Dialect = text;

    console.log(text2);
    

    return text2;
}

//add our models
storeAddModel("test", 1);

console.log(storeGetModel("test"));

// const db = new Sequelize (
//     processVars.APP_DB_NAME, processVars.APP_DB_USER, processVars.APP_DB_PASS, {
//         host: processVars.APP_DB_HOST,
//         port: parseInt(processVars.APP_DB_PORT),
//         dialect: "mysql"
//     }
// );


// db.authenticate();
// db.sync({force: true});

export default null;
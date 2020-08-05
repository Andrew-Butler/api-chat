import sequelize, { Sequelize, Dialect } from "sequelize";

const processVars = process.env;

function getDbDialect (text: any): Dialect {
    const text2: Dialect = text;

    return text2;
}

const db = new Sequelize (
    processVars.APP_DB_NAME, processVars.APP_DB_USER, processVars.APP_DB_PASS, {
        host: processVars.APP_DB_HOST,
        port: parseInt(processVars.APP_DB_PORT),
        dialect: getDbDialect(processVars.APP_DB_DIALECT)
    }
);

db.authenticate();
db.sync({force: true});

export default db;
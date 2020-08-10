//npm imports
import dotenv from "dotenv";
dotenv.config();

//app imports
import App from "./app";

//start
const server = new App();

server.getApp().listen(process.env.APP_PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${process.env.APP_PORT}`);
});

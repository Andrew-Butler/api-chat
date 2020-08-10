import dotenv from "dotenv";
import App from "./app";

dotenv.config();

const server = new App();

server.getApp().listen(process.env.APP_PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${process.env.APP_PORT}`);
  });

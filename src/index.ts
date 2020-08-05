import dotenv from "dotenv";

import App from "./app";

dotenv.config();

const server = new App();
const port = process.env.APP_PORT;

server.getApp().listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });

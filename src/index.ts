import express, { Application } from "express";
import Server from "./config/Server";

const app: Application = express();
const server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 5005;

app.listen(PORT, "localhost", () => {
  console.log(`User service is running on port ${PORT}.`);
});

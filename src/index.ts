import express, { Application } from "express";
import Server from "./config/Server";
import { Routes } from "./routes/index";

const app: Application = express();
new Server(app);
new Routes(app);
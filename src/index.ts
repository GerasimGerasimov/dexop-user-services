import express, { Application } from "express";
import { Server } from "./config/Server";

const app: Application = express();
new Server(app);
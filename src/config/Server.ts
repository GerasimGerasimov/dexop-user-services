import express, { Application, Request, Response } from "express";
import { Routes } from "../routes/index";
import cors from "cors";
import { Database } from "./Database";
import * as http from "http";

export default class Server {
  public port: number = 5005;
  public httpServer: any;

  constructor (app: Application) {
    this.config(app);
    this.synchronizeDatabase();
    this.httpServer = http.createServer(app);
    new Routes(app);
    app.get("/", (req: Request, res: Response) => {
      res.send('Test response.')
    });
  };

  private config (app: Application) : void {
    const corsOptions = {
      origin: "localhost: 5005"
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({
      extended: true
    }));
  };

  private async synchronizeDatabase () : Promise<void> {
    const db = new Database();
    if (db.sequelize !== undefined) {
      await db.sequelize.sync();
    }
  };
}
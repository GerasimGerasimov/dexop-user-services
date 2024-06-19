import express, { Application } from "express";
import { Routes } from "../routes/index";
import cors from "cors";
import { Database } from "./DbConfig";

export default class Server {
  constructor (app: Application) {
    this.config(app);
    this.synchronizeDatabase();
    new Routes(app);
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

  private async synchronizeDatabase () {
    const db = new Database();
    if (db.sequelize !== undefined) {
      await db.sequelize.sync();
      console.log(db.sequelize.model("Users"));
    }
  };
}
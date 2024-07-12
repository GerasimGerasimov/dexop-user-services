import express, { Application, Request, Response } from "express";
import session from 'express-session';
import { Routes } from "../routes/index";
import cors from "cors";
import { Database } from './Database';
import * as http from "http";
import { Users } from "../data/models/Users";
import { userService } from "../services/UserService";

export class Server {
  private db: Database = new Database();
  private port: number = 5005;
  private http: any;
  private symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQSTUVWXYZ0123456789";
  private sessionKey = '';

  constructor (app: Application) {
    this.config(app);
    this.generateRandomKey();
    this.synchronizeDatabase();
    new Routes(app);
    this.createDefaultUser();
  };

  private config (app: Application) : void {
    this.http = http.createServer(app).listen(this.port);

    const corsOptions = {
      origin: `localhost:${this.port}`
    };

    app.set('trust proxy', 1);
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({
      extended: true
    }));
    app.use(session({
      secret: this.sessionKey,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true }
    }));
    app.all("*", (req: Request, res: Response, next: () => void) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
    });
  };

  private async synchronizeDatabase () : Promise<void> {
    if (this.db.sequelize !== undefined) {
      await this.db.sequelize.sync();
    }
  };

  private async createDefaultUser () : Promise<void> {
    const rootUser = await Users.findOne({
      where: {
        id: 0,
        firstName: "root",
        secondName: "admin"
       }
    });
    if (rootUser === null) {
      await userService.createDefaultUser();
    }
  };

  private generateRandomKey () : string {
    let key = '';

    for (let i = 0; i < 15; i++) {
      key += this.symbols.charAt(Math.floor(Math.random() * this.symbols.length));
    }

    return this.sessionKey = key.slice(0, 5) + '-' + key.slice(5, 5) + '-' + key.slice(10, 5);
  };
}
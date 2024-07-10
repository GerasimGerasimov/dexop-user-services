import express, { Application, Request, Response } from "express";
import session from 'express-session';
import { Routes } from "../routes/index";
import cors from "cors";
import { Database } from './Database';
import * as http from "http";
import bodyParser from "body-parser";
import { Users } from "../data/models/Users";
import { userService } from "../services/UserService";
import { authService } from "../services/AuthenticationService";

export class Server {
  private db: Database = new Database();
  private port: number = 5005;
  private http: any;
  private client: any;

  constructor (app: Application) {
    this.config(app);
    this.synchronizeDatabase();
    new Routes(app);
    this.createDefaultUser();
  };

  private config (app: Application) : void {
    const corsOptions = {
      origin: `localhost:${this.port}`
    };

    app.set('trust proxy', 1);
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(express.urlencoded({
      extended: true
    }));
    app.use(session({
      secret: authService.sessionKey,
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
    this.http = http.createServer(app).listen(this.port);
  };

  private async synchronizeDatabase () : Promise<void> {
    if (this.db.sequelize !== undefined) {
      await this.db.sequelize.sync();
    }
  };

  private async createDefaultUser () : Promise<void> {
    const rootUser = await Users.findOne({
      where: {
        firstName: "root",
        secondName: "admin"
       }
    });
    if (rootUser === null) {
      await userService.createDefaultUser();
    }
  };
}
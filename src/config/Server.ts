import express, { Application, Request, Response } from "express";
import { Routes } from "../routes/index";
import cors from "cors";
import { Database } from './Database';
import * as http from "http";
import { Users } from "../data/models/Users";
import { Roles } from "../data/enums/Roles";

export class Server {
  private db: Database = new Database();
  private port: number = 5010;
  private http: any;

  constructor (app: Application) {
    this.config(app);
    this.synchronizeDatabase();
    new Routes(app);
    this.createDefaultUser();
  };

  private config (app: Application) : void {
    this.http = http.createServer(app).listen(this.port);

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({
      extended: true
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
      const firstName = "root";
        const secondName = "admin";
        const password = "rootAdmin";
        const role = Roles.Root;
        try {
            await Users.create({
                id: 0,
                firstName: firstName,
                secondName: secondName,
                password: password,
                role: role.toString()
            });
        } catch (error) {
            throw new Error(error);
        }
    }
  };
}

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { Routes } from "../routes/index";
import cors from "cors";
import { Database } from "./Database";
export default class Server {
    constructor(app) {
        this.config(app);
        this.synchronizeDatabase();
        new Routes(app);
    }
    ;
    config(app) {
        const corsOptions = {
            origin: "localhost: 5005"
        };
        app.use(cors(corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({
            extended: true
        }));
    }
    ;
    synchronizeDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = new Database();
            if (db.sequelize !== undefined) {
                yield db.sequelize.sync();
                console.log(`Current tables are ${db.sequelize.model("Users")}`);
            }
        });
    }
    ;
}
//# sourceMappingURL=Server.js.map
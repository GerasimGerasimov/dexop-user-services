import { Application } from "express";
import { userRouter } from "./UserRouter";

export class Routes {
    constructor (app: Application) {
        app.use("/api", userRouter);
    }
}
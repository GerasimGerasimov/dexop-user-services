import { Application } from "express";
import { userRouter } from "./UserRouter";
import { authRouter } from "./AuthenticationRoutes";

export class Routes {
    constructor (app: Application) {
        app.use("/users", userRouter);
        app.use("/auth", authRouter);
    }
}
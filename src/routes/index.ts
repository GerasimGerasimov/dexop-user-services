import { Application } from "express";
import { userRouter } from "./UserRouter";
import { authRouter } from "./AuthenticationRoutes";

export class Routes {
    constructor (app: Application) {
        app.use("/api/users", userRouter);
        app.use("/api/auth", authRouter);
    }
}
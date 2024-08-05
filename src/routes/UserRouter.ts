import { UserServiceController } from "../controllers/UserServiceController";
import express, { Request, Response } from "express";

class UserRouter {;
    public router = express.Router();
    private controller = new UserServiceController();

    constructor () {
        this.initializeRoutes();
    };

    private initializeRoutes () {
        this.router.route('/users')
            .get(this.controller.getUsers);

        this.router.route('/user')
            .post(this.controller.createUser)
            .get(this.controller.getUser)
            .put(this.controller.updateUser)
            .put(this.controller.login)
            .put(this.controller.logout)
            .delete(this.controller.deleteUser)
    }
}

export const userRouter = new UserRouter().router;

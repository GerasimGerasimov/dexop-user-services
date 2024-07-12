import { UserServiceController } from "../controllers/UserServiceController";
import express, { Request, Response } from "express";

class UserRouter {;
    public router = express.Router();
    private controller = new UserServiceController();

    constructor () {
        this.initializeRoutes();
    };

    private initializeRoutes () {
        this.router.post("/new", async (req: Request, res: Response) => {
            console.log(req);
            try {
                await res.json(this.controller.createUser);
            } catch (error) {
                res.status(400).send(error);
            }
        });

        this.router.put("/update", async (req: Request, res: Response) => {
            try {
                await res.json(this.controller.updateUser);
            } catch (error) {
                res.status(400).send(error);
            }
        });

        this.router.get("/get-user", async (req: Request, res: Response) => {
            console.log(req);
            try {
                await res.json(this.controller.getUser);
            } catch (error) {
                res.status(400).send(error);
            }
        });

        this.router.get("/get-all", async (req: Request, res: Response) => {
            console.log(req);
            try {
                await res.json(this.controller.getUsers);
            } catch (error) {
                res.status(400).send(error);
            }
        });

        // TODO: define login/logout routes

        this.router.put("/delete-user", async (req: Request, res: Response) => {
            console.log(req);
            try {
                await res.json(this.controller.deleteUser);
            } catch (error) {
                res.status(400).send(error);
            }
        });
    }
}

export const userRouter = new UserRouter().router;

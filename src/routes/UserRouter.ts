import { UserService } from "../services/UserService";
import express, { Request, Response } from "express";

class UserRouter {
    public userService = new UserService();
    public router = express.Router();

    constructor () {
        this.initializeRoutes();
    };

    private initializeRoutes () {
        this.router.post("/new", async (req: Request, res: Response) => {
            console.log(req);
            try {
                await res.json(this.userService.updateUser);
            } catch (error) {
                res.status(400).send(error);
            }
        });

        this.router.put("/update", async (req: Request, res: Response) => {
            console.log(req);
            try {
                await res.json(this.userService.updateUser);
            } catch (error) {
                res.status(400).send(error);
            }
        });

        this.router.get("/get-user:id", async (req: Request, res: Response) => {
            console.log(req);
            try {
                await res.json(this.userService.getUserById);
            } catch (error) {
                res.status(400).send(error);
            }
        });

        this.router.get("/get-all-users", async (req: Request, res: Response) => {
            console.log(req);
            try {
                await res.json(this.userService.getAllUsers);
            } catch (error) {
                res.status(400).send(error);
            }
        });

        this.router.delete("/delete-user:id", async (req: Request, res: Response) => {
            console.log(req);
            try {
                await res.json(this.userService.deleteUser);
            } catch (error) {
                res.status(400).send(error);
            }
        });
    }
}

export const userRouter = new UserRouter().router;

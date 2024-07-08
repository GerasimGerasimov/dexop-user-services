import express, { Request, Response } from "express";
import { AuthenticationServiceController } from "../controllers/AuthenticationServiceController";

class AuthenticationRoutes {
    public router = express.Router();
    private controller = new AuthenticationServiceController();

    constructor () {
        this.initializeRoutes();
    }

    private initializeRoutes () : void {
        this.router.put('/login', async (req: Request, res: Response) => {
            console.log(req);
            try {
                await res.json(this.controller.login);
            } catch (error) {
                res.status(400).send(error);
            }
        });

        this.router.put('/logout', async (req: Request, res: Response) => {
            console.log(req);
            try {
                await res.json(this.controller.logout);
            } catch (error) {
                res.status(400).send(error);
            }
        });
    }
}

export const authRouter = new AuthenticationRoutes().router;

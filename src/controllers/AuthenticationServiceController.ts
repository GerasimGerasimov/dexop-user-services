import { Request, Response } from "express";
import { authService } from "../services/AuthenticationService";
import { Users } from "../data/models/Users";

export class AuthenticationServiceController {
    login = async (req: Request, res: Response) => {
        if (!req.body.title) {
            res.status(400).send({
                message: "Unable to login."
            });
        return;
    }

        try {
            const user: Users = req.body;
            const newUser = await authService.login(
                user.id,
                user.password
            );
            res.status(200).send(newUser);
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred while user authentication."
            });
        }
    };

    logout = async (req: Request, res: Response) => {
        if (!req.body.title) {
            res.status(400).send({
                message: "Unable to logout."
            });
        return;
        }

        try {
            const user: Users = req.body;
            const newUser = await authService.logout(
                user.id
            );
            res.status(200).send(newUser);
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred while user creating."
            });
        }
    };
}
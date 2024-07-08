import { Request, Response } from "express";
import { Users } from "../data/models/Users";
import { userService } from '../services/UserService';

export class UserServiceController {
    createUser = async (req: Request, res: Response) => {
        if (!req.body.title) {
            res.status(400).send({
                message: "Unable to create empty user."
            });
        return;
        }

        try {
            const user: Users = req.body;
            const newUser = await userService.createUser(
                user.firstName,
                user.secondName,
                user.password,
                user.role
            );
            res.status(200).send(newUser);
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred while user creating."
              });
        }
    };

    updateUser = async (req: Request, res: Response) => {
        if (!req.body.title) {
            res.status(400).send({
                message: "Unable to update empty user."
            });
        return;
        }

        try {
            const user: Users = req.body;
            const newUser = await userService.updateUser(user.id);
            res.status(200).send(newUser);
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred while user updating."
              });
        }
    };

    getUser = async (req: Request, res: Response) => {
        if (!req.body.title) {
            res.status(400).send({
                message: "Unable to get empty user."
            });
        return;
        }

        try {
            const user: Users = req.body;
            const newUser = await userService.getUserById(user.id);
            res.status(200).send(newUser);
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred getting user."
              });
        }
    };

    deleteUser = async (req: Request, res: Response) => {
        if (!req.body.title) {
            res.status(400).send({
                message: "Unable to delete empty user."
            });
        return;
        }

        try {
            const user: Users = req.body;
            const newUser = await userService.deleteUser(user.id);
            res.status(200).send(newUser);
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred while user deleting."
            });
        }
    };
}

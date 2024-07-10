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
            const newUser: Users = req.body;
            const userToSave = await userService.createUser(newUser);
            res.status(200).send(userToSave);
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
            user.id = req.params.id;
            const rowsNumber = await userService.updateUser(user);
            if (rowsNumber === 1) {
                res.send({
                    message: `User with id = ${user.id} was successfully updated.`
                });
            } else {
                res.send({
                  message: `Cannot update user with id=${user.id}.`
                });
            }
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred while user updating."
              });
        }
    };

    getUser = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        if (!req.body.title) {
            res.status(400).send({
                message: "Unable to get empty user."
            });
        return;
        }

        try {
            const user = await userService.getUserById(id);
            res.status(200).send(user);
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred getting user."
            });
        }
    };

    getUsers = async (req: Request, res: Response) => {
        try {
            const users = await userService.getUsers();
            res.status(200).send(users);
        } catch (error) {
            res.status(500).send({
                message: "Unable to get users."
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

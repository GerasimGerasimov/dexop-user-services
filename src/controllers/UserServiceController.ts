import { Request, Response } from "express";
import { Users } from "../data/models/Users";
import { userService } from '../services/UserService';

export class UserServiceController {
    public createUser = async (req: Request, res: Response) => {
        if (!req.body.title) {
            res.status(400).send({
                message: "Unable to create empty user."
            });
        return;
        }

        try {
            const newUser: Users = req.body;
            newUser.firstName = req.query.firstName;
            newUser.secondName = req.query.secondName;
            newUser.password = req.query.password;
            newUser.role = req.query.role;
            const userToSave = await userService.createUser(newUser);
            res.status(200).send(userToSave);
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred while user creating."
            });
        } finally {
            res.end();
        }
    };

    public updateUser = async (req: Request, res: Response) => {
        if (!req.body.title) {
            res.status(400).send({
                message: "Unable to update empty user."
            });
        return;
        }

        try {
            const user: Users = req.body;
            user.id = req.query.id;
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
        } finally {
            res.end();
        }
    };

    public getUser = async (req: Request, res: Response) => {
        const id = req.query.id;

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
        } finally {
            res.end();
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
        } finally {
            res.end();
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
            user.id = req.query.id;
            const newUser = await userService.deleteUser(user.id);
            res.status(200).send(newUser);
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred while user deleting."
            });
        } finally {
            res.end();
        }
    };

    login = async (req: Request, res: Response) => {
        if (!req.body.title) {
            res.status(400).send({
                message: "Unable to login."
            });
        return;
    }

        try {
            const user: Users = req.body;
            user.id = req.query.id;
            user.password = req.query.pawwsord;
            const newUser = await userService.login(
                user.id,
                user.password
            );
            res.status(200).send(newUser);
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred while user authentication."
            });
        } finally {
            res.end();
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
            user.id = req.query.id;
            const newUser = await userService.logout(
                user.id
            );
            res.status(200).send(newUser);
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred while user creating."
            });
        } finally {
            res.end();
        }
    };
}

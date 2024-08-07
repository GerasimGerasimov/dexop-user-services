import { Request, Response } from "express";
import { Users } from "../data/models/Users";

export class UserServiceController {
    public createUser = async (req: Request, res: Response) => {
        try {
            const { firstName, secondName, role, password } = req.body;
            const user = await Users.create({
                firstName: firstName,
                secondName: secondName,
                role: role,
                password: password
            });

            if (!user) {
                res.status(500).send({
                    message: "Unable to create user."
                });
            } else {
                res.json(user);
            }
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred while user creating."
            });
            console.log(error);
        } finally {
            res.end();
        }
    };

    public updateUser = async (req: Request, res: Response) => {
        try {
            const id = req.query.id;
            const { password } = req.body;
            const user = await Users.findByPk(id);
            console.log(user);

            if (!user) {
                res.status(500).send({
                    message: `User with ID ${id} not found`
                });
            } else {
                user.password = password;
                await user.save();

                res.json({ message: 'User updated successfully', user })
            }
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred while user updating."
            });
            console.log(error);
        } finally {
            res.end();
        }
    };

    public getUser = async (req: Request, res: Response) => {
        try {
            const id = req.query.id;
            const user = await Users.findByPk(id);
            if (!user) {
                res.status(500).send({
                    message: "User not found"
                });
            } else {
                res.json(user);
            }
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred getting user."
            });
            console.log(error);
        } finally {
            res.end();
        }
    };

    public getUsers = async (req: Request, res: Response) => {
        try {
            const users = await Users.findAll();
            if (!users) {
                res.status(500).send({
                    message: "Unable to get list of users."
                });
            } else {
                res.json(users);
            }
        } catch (error) {
            res.status(500).send({
                message: "Unable to get users."
            });
            console.log(error);
        } finally {
            res.end();
        }
    };

    public deleteUser = async (req: Request, res: Response) => {
        try {
            const id: number = req.query.id;
            const user = await Users.findByPk(id);

            if (user !== null) {
                await user.destroy();
            } else {
                console.log(`Cannot find user with ID ${id}`);
                res.status(404).send(`Cannot find user with ID ${id}`);
            }
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred while user deleting."
            });
            console.log(error);
        } finally {
            res.end();
        }
    };

    public login = async (req: Request, res: Response) => {
        try {
            const id = req.query.id;
            const user = await Users.findByPk(id);
            if (!user) {
                res.status(500).send({
                    message: `Unable to find user with ID ${id}`
                });
            } else {
                user.hasLoggedIn = true;
                user.loginTime = new Date();
                user.save();
            }
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred while user authentication."
            });
            console.log(error);
        } finally {
            res.end();
        }
    };

    public logout = async (req: Request, res: Response) => {
        try {
            const id = req.query.id;
            const user = await Users.findByPk(id);
            if (!user) {
                res.status(500).send({
                    message: `Unable to find user with ID ${id}`
                });
            } else {
                user.hasLoggedIn = false;
                user.save();
            }
        } catch (error) {
            res.status(500).send({
                message: "Some error occurred while user logout."
            });
            console.log(error);
        } finally {
            res.end();
        }
    };
}

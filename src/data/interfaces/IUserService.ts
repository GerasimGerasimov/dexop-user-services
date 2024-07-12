import { Users } from "../models/Users";

export interface IUserService {
    createUser(newUser: Users): Promise<Users>;
    createDefaultUser() : Promise<void>;
    updateUser(user: Users) : Promise<number>;
    getUserById(id: number) : Promise<Users>;
    getUsers() : Promise<Users[]>;
    deleteUser(id: number) : Promise<void>;
    login(id: number, password: string) : Promise<void>;
    logout(id: number) : Promise<void>;
}

/**
 * A possibility of addind full user deletion
 * feature is not rejected:
 * for example:
 * markUserAsDeleted(id: number): void,
 * deleteUsers(ids: number[]): void,
 * deleteUserById(id: number): void
 */
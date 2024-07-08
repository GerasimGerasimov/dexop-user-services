import { Users } from "../models/Users";

export interface IUserService {
    createUser(
        firstName: string,
        secondName: string,
        password: string,
        role: string
    ): Promise<void>;
    createDefaultUser() : Promise<void>;
    authenticateUser(id: number) : Promise<void>;
    updateUser(id: number) : Promise<void>;
    getUserById(id: number) : Promise<Users>;
    deleteUser(id: number) : Promise<void>;
}

/**
 * A possibility of addind full user deletion
 * feature is not rejected:
 * for example:
 * markUserAsDeleted(id: number): void,
 * deleteUsers(ids: number[]): void,
 * deleteUserById(id: number): void
 */
export interface IUserService {
    createUser(
        firstName: string,
        secondName: string,
        password: string,
        role: string
    ): void;
    createDefaultUser(): void;
    updateUser(id: number): void;
    getUserById(id: number): void;
    deleteUser(id: number): void;
}

/**
 * A possibility of addind full user deletion
 * feature is not rejected:
 * for example:
 * markUserAsDeleted(id: number): void,
 * deleteUsers(ids: number[]): void,
 * deleteUserById(id: number): void
 */
import { Roles } from '../data/enums/Roles';
import { IUserService } from '../data/interfaces/IUserService';
import { Users } from '../data/models/Users';

class UserService implements IUserService {
    public async createUser(
        firstName: string,
        secondName: string,
        password: string,
        role: string
    ) : Promise<void> {
        try {
            await Users.create({
                firstName: firstName,
                secondName: secondName,
                password: password,
                role: role
            });
        } catch (error) {
            throw new Error(error);
        }
    };

    public async authenticateUser(id: number) : Promise<void> {
        try {
            const user = await Users.findOne({
                where: { id: id }
            });

            if (user !== null) {
                user.hasLoggedIn = true;
                await user.save();
            } 
        } catch (error) {
            throw new Error(error);
        }
    };

    // possibly this method will be reworked through objects comparing
    public async updateUser (
        id: number,
        firstName: string | null = null,
        secondName: string | null = null,
        password: string | null = null
    ) : Promise<void> {
        try {
            const currentUser = await Users.findOne({
                where: { id: id }
            });

            if (currentUser !== null) {
                if (firstName !== null) {
                    currentUser.firstName = firstName;
                }

                if (firstName === "root") {
                    alert("This name is already in use.")
                }

                if (secondName !== null) {
                    currentUser.secondName = secondName;
                }

                if (secondName === "admin") {
                    alert("This surname is already in use.")
                }

                if (password !== null) {
                    currentUser.password = password;
                }

                await currentUser.save();
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    public async getUserById (id: number) : Promise<Users> {
        try {
            const user = await Users.findOne({
                where: { id: id }
            });
            return user!;
        } catch (error) {
            throw new Error(error);
        }
    };

    public async deleteUser(id: number) : Promise<void> {
        try {
            const user = await Users.findOne({
                where: { id: id }
            });
            user!.isDeleted = true;
            await user!.save();
        } catch (error) {
            throw new Error(error);
        }
    };

    public async createDefaultUser () : Promise<void> {
        const firstName = "root";
        const secondName = "admin";
        const password = "rootAdmin";
        const role = Roles.Root;
        try {
            await Users.create({
                id: 0,
                firstName: firstName,
                secondName: secondName,
                password: password,
                role: role.toString()
            });
        } catch (error) {
            throw new Error(error);
        }
    };
}

export const userService = new UserService();
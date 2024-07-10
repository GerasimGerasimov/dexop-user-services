import { Roles } from '../data/enums/Roles';
import { IUserService } from '../data/interfaces/IUserService';
import { Users } from '../data/models/Users';

class UserService implements IUserService {
    public async createUser(newUser: Users) : Promise<Users> {
        try {
            return await Users.create({
                firstName: newUser.firstName,
                secondName: newUser.secondName,
                password: newUser.password,
                role: newUser.role
            });
        } catch (error) {
            throw new Error(error);
        }
    };

    // possibly this method will be reworked through objects comparing
    public async updateUser (user: Users) : Promise<number> {
        const { id, firstName, secondName, password, role } = user;
        try {
            const affectedRows = await Users.update(
                { firstName, secondName, password, role }, 
                { where: { id: id } }
            );
            return affectedRows[0];
        } catch (error) {
            throw new Error(error);
        }
    };

    public async getUserById (id: number) : Promise<Users> {
        try {
            const user = await Users.findByPk(id);
            return user!;
        } catch (error) {
            throw new Error(error);
        }
    };

    public async getUsers(): Promise<Users[]> {
        try {
            return Users.findAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    public async deleteUser(id: number) : Promise<void> {
        try {
            const user = await Users.findByPk(id);
            if (user !== null) {
                user.isDeleted = true;
                await user.save();
            }
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
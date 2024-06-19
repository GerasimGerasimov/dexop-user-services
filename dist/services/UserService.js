var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Roles } from '../data/enums/Roles';
import { User } from '../data/models/User';
export class UserService {
    createUser(firstName, secondName, password, role) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User.create({
                    firstName: firstName,
                    secondName: secondName,
                    password: password,
                    role: role
                });
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    ;
    createDefaultUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const firstName = "root";
            const secondName = "admin";
            const password = "rootAdmin";
            const role = Roles.Root;
            try {
                yield User.create({
                    firstName: firstName,
                    secondName: secondName,
                    password: password,
                    role: role.toString()
                });
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    ;
    // possibly this method will be reworked through objects comparing
    updateUser(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, firstName = null, secondName = null, password = null) {
            try {
                const currentUser = yield User.findOne({
                    where: { id: id }
                });
                if (currentUser !== null) {
                    if (firstName !== null) {
                        currentUser.firstName = firstName;
                    }
                    if (secondName !== null) {
                        currentUser.secondName = secondName;
                    }
                    if (password !== null) {
                        currentUser.password = password;
                    }
                    yield currentUser.save();
                }
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    ;
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User.findAll();
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    ;
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User.findOne({
                    where: { id: id }
                });
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    ;
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User.findOne({
                    where: { id: id }
                });
                user.isDeleted = true;
                yield user.save();
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    ;
}
//# sourceMappingURL=UserService.js.map
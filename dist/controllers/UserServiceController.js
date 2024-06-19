var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserService } from '../services/UserService';
export class UserServiceController {
    constructor() {
        this.userService = new UserService();
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (!req.body.title) {
                res.status(400).send({
                    message: "Unable to create empty user."
                });
                return;
            }
            try {
                const user = req.body;
                const newUser = yield this.userService.createUser(user.firstName, user.secondName, user.password, user.role);
                res.status(200).send(newUser);
            }
            catch (error) {
                res.status(500).send({
                    message: "Some error occurred while user creating."
                });
            }
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (!req.body.title) {
                res.status(400).send({
                    message: "Unable to update empty user."
                });
                return;
            }
            try {
                const user = req.body;
                const newUser = yield this.userService.updateUser(user.id);
                res.status(200).send(newUser);
            }
            catch (error) {
                res.status(500).send({
                    message: "Some error occurred while user updating."
                });
            }
        });
        this.getUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (!req.body.title) {
                res.status(400).send({
                    message: "Unable to get empty user."
                });
                return;
            }
            try {
                const user = req.body;
                const newUser = yield this.userService.getUserById(user.id);
                res.status(200).send(newUser);
            }
            catch (error) {
                res.status(500).send({
                    message: "Some error occurred getting user."
                });
            }
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (!req.body.title) {
                res.status(400).send({
                    message: "Unable to delete empty user."
                });
                return;
            }
            try {
                const user = req.body;
                const newUser = yield this.userService.deleteUser(user.id);
                res.status(200).send(newUser);
            }
            catch (error) {
                res.status(500).send({
                    message: "Some error occurred while user deleting."
                });
            }
        });
    }
}
//# sourceMappingURL=UserServiceController.js.map
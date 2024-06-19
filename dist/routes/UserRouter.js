var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserService } from "../services/UserService";
import express from "express";
class UserRouter {
    constructor() {
        this.userService = new UserService();
        this.router = express.Router();
        this.initializeRoutes();
    }
    ;
    initializeRoutes() {
        this.router.post("/new", (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req);
            try {
                yield res.json(this.userService.updateUser);
            }
            catch (error) {
                res.status(400).send(error);
            }
        }));
        this.router.put("/update", (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req);
            try {
                yield res.json(this.userService.updateUser);
            }
            catch (error) {
                res.status(400).send(error);
            }
        }));
        this.router.get("/get-user:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req);
            try {
                yield res.json(this.userService.getUserById);
            }
            catch (error) {
                res.status(400).send(error);
            }
        }));
        this.router.get("/get-all-users", (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req);
            try {
                yield res.json(this.userService.getAllUsers);
            }
            catch (error) {
                res.status(400).send(error);
            }
        }));
        this.router.delete("/delete-user:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req);
            try {
                yield res.json(this.userService.deleteUser);
            }
            catch (error) {
                res.status(400).send(error);
            }
        }));
    }
}
export const userRouter = new UserRouter().router;
//# sourceMappingURL=UserRouter.js.map
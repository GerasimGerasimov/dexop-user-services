var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Sequelize } from "sequelize";
const DbConfig = {
    host: "localhost",
    user: "root",
    password: "test",
    db: "test",
    dialect: "sqlite",
    storage: ":memory:"
};
export const sequelize = new Sequelize({
    database: DbConfig.db,
    username: DbConfig.user,
    password: DbConfig.password,
    host: DbConfig.host,
    dialect: DbConfig.dialect,
    storage: DbConfig.storage
});
export class Database {
    constructor() {
        this.createDatabaseConnection();
    }
    ;
    createDatabaseConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            this.sequelize = sequelize;
            yield this.sequelize
                .authenticate().then(() => {
                console.log("Connection has been established successfully.");
            })
                .catch((error) => {
                console.log(error);
            });
        });
    }
}
/**
 * Add database connection pool by its requirement
 */
//# sourceMappingURL=DbConfig.js.map
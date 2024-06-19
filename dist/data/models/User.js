var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Model, Table, Column, DataType } from "sequelize-typescript";
let User = class User extends Model {
};
__decorate([
    Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: "Id"
    }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
        field: "First Name"
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
        field: "Second Name"
    }),
    __metadata("design:type", String)
], User.prototype, "secondName", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
        field: "Password"
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
        field: "Role"
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        field: "Has Logged In"
    }),
    __metadata("design:type", Boolean)
], User.prototype, "hasLoggedIn", void 0);
__decorate([
    Column({
        type: DataType.DATE,
        allowNull: true,
        field: "Login Time"
    }),
    __metadata("design:type", Date)
], User.prototype, "loginTime", void 0);
__decorate([
    Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        field: "Is Deleted"
    }),
    __metadata("design:type", Boolean)
], User.prototype, "isDeleted", void 0);
User = __decorate([
    Table({
        tableName: "Users",
    })
], User);
export { User };
/**
* "deleted" users will be marked by "isDeleted" flag
* a full deletion may be implemented;
* if necessary the User class could be extends with
* two additional classes instead of Roles enum using
*/ 
//# sourceMappingURL=User.js.map
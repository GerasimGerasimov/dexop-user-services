import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: "Users", // TODO: define model table with ST
})
export class Users extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: "Id"
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: "First Name"
    })
    firstName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: "Second Name"
    })
    secondName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: "Password"
    })
    password!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: "Role"
    })
    role!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        field: "Has Logged In"
    })
    hasLoggedIn!: boolean;

    @Column({
        type: DataType.DATE,
        allowNull: true,
        field: "Login Time"
    })
    loginTime!: Date;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        field: "Is Deleted"
    })
    isDeleted!: boolean;
}

/**
* "deleted" users will be marked by "isDeleted" flag
* a full deletion may be implemented;
* if necessary the User class could be extends with
* two additional classes instead of Roles enum using
*/
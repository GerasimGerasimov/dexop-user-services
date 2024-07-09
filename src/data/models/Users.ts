import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: "Users",
})
export class Users extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
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
        defaultValue: false,
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
        field: "Is Deleted",
        defaultValue: false
    })
    isDeleted!: boolean;
}

import { Users } from "../data/models/Users";
import { Sequelize, SequelizeOptions } from "sequelize-typescript";

const DbConfig: SequelizeOptions = {
  host: "localhost",
  username: "root",
  password: "test",
  database: "test",
  dialect: "sqlite",
  storage: "src/db.sqlite"
};

export const sequelize = new Sequelize({
  database: DbConfig.database,
  username: DbConfig.username,
  password: DbConfig.password,
  host: DbConfig.host,
  dialect: DbConfig.dialect,
  storage: DbConfig.storage,
  models: [Users]
});

export class Database {
  public sequelize: Sequelize | undefined;

  constructor () {
    this.createDatabaseConnection();
  };

  private async createDatabaseConnection () {
    this.sequelize = sequelize;

    await this.sequelize!
      .authenticate().then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

/**
 * Add database connection pool by its requirement
 */

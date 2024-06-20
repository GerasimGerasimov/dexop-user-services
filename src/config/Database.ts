import { Users } from "../data/models/Users";
import { Sequelize } from "sequelize-typescript";

const DbConfig: any = {
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

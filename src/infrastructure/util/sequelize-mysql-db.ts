import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("debt-angels-db", "root", "password", {
  dialect: "mysql",
  host: "localhost"
});

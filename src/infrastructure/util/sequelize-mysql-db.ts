import { Sequelize } from "sequelize";
import DbModel from '../../application/models/my-sql-db.model';

export const sequelize = (dbModel: DbModel) => {
  console.log(dbModel);
  return new Sequelize(dbModel.dbName, dbModel.username, dbModel.password, {
  dialect: "mysql",
  host: dbModel.host
})};

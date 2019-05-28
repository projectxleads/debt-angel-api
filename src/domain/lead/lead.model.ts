import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";

import { sequelize } from "../../infrastructure/util/sequelize-mysql-db";

export class Lead extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public phoneNumber!: string;
  public alternaticePhoneNumber!: string;
  public email!: string;

  // timestamp
  public readonly createAt!: Date;
  public readonly updatedAt!: Date;
}

// const lead = sequelize.define("lead", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   phoneNumber: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   alternativePhoneNumber: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

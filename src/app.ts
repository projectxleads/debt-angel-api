import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";

import { DataTypes } from "sequelize";

import Lead from "./domain/lead/lead.model";
import { sequelize } from "./infrastructure/util/sequelize-mysql-db";

import { middlewareRouter } from "./presentation/middleware/routes.middleware";

// Initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", middlewareRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

Lead.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  alternativePhoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "Lead",
});

sequelize
  .sync()
  .then((result: any) => {
    app.listen(port, () => {
      console.log(`Server start at http://localhost:${port}`);
    });
  });

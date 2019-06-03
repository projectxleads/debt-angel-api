import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";

import { sequelize } from "./infrastructure/util/sequelize-mysql-db";
import DbTableInit from "./infrastructure/util/initialize-mysql-db-tables";

import { middlewareRouter } from "./presentation/middleware/routes.middleware";
import DbModel from "./application/models/my-sql-db.model";


// Initialize configuration
dotenv.config();

const port = process.env.PORT || 1337;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", middlewareRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const dbModel: DbModel = {
  dbName: <string>process.env.DB_NAME,
  host: <string>process.env.DB_HOST,
  username: <string>process.env.DB_USERNAME,
  password: <string>process.env.DB_PASSWORD
};

// TODO: Refactor
const db = sequelize(dbModel)
DbTableInit(db);

db.sync()
  .then((result: any) => {
    app.listen(port, () => {
      console.log(`Server start at http://localhost:${port}`);
    });
  });

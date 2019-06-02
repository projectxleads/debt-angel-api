import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";

import { sequelize } from "./infrastructure/util/sequelize-mysql-db";
import DbTableInit from "./infrastructure/util/initialize-mysql-db-tables";

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

DbTableInit();

sequelize
  .sync({force: true})
  .then((result: any) => {
    app.listen(port, () => {
      console.log(`Server start at http://localhost:${port}`);
    });
  });

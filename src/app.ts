import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";

// Initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server start at http://localhost:${port}`);
});

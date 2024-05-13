import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/taskRout.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 6000;
const url = process.env.DB_URL;

mongoose
  .connect(url)
  .then(() => {
    console.log(`Database is connected 🛢️`);
    app.listen(port, () => {
      console.log(`backend is running on port ${port} `);
    });
  })
  .catch((e) => {
    console.log(`backend error ${e}`);
  });

app.get("/", (req, res) => {
  res.send("Backend is Working ⚒️");
});

// route for task 
app.use("/",route)

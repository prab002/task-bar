import express from "express";
import {
  Create,
  DeleteTask,
  getAll,
  updateTask,
} from "../controller/dataControll.js";

const route = express.Router();

//route for the task
route.post("/add", Create);
route.get("/get", getAll);
route.put("/update/:id", updateTask);
route.delete("/delete/:id", DeleteTask);

export default route;

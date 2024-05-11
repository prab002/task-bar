import mongoose, { model } from "mongoose";

const dataModel = new mongoose.Schema({
  data: {
    type: String,
    require: true,
  },
});

export default mongoose.model("taskData", dataModel);

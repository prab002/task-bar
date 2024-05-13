import mongoose from "mongoose";

const dataModel = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("taskData", dataModel);

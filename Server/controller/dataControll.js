import dataModel from "../models/data.Model.js";

export const Create = async (req, res) => {
  try {
    const { task } = req.body;
    if (!task) {
      return res.status(400).json({ error: "Task is required" });
    }

    const createdTask = await dataModel.create({ task: task });
    res
      .status(201)
      .json({ task: createdTask, message: "Task created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAll = async (req, res) => {
  try {
    const allTasks = await dataModel.find();
    res.json(allTasks);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await dataModel.findByIdAndUpdate(
      id,
      { done: true },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const DeleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await dataModel.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(deletedTask);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

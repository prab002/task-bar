import dataModel from "../models/data.Model.js";

export const Create = async (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }

  dataModel
    .create({ task: task })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};  

export const getAll = async (req, res) => {
  dataModel
    .find()
    .then((result) => res.json(result))
    .catch((err) => {
      console.log(err);
    });
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  dataModel
    .findByIdAndUpdate(id, { done: true }, { new: true })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

export const DeleteTask = async (req, res) => {
  const { id } = req.params;
  dataModel
    .findByIdAndDelete(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

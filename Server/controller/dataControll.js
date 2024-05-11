import dataModel from "../models/data.Model.js";

export const Create = async (req, res) => {
  try {
    const userData = new dataModel(req.body);
    if (!userData) {
      return res.status(404).json({ msg: "user data not found" });
    }

    const saveData = await userData.save();
    res.status(200).json(saveData);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

/**
 * here is the code of all the validation of the catagory
 */

const userModule = require("../model/catagory.model");

module.exports = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.status(400).json({ message: "name is required" });
    }
    if (!description) {
      return res.status(400).json({ message: "description is required" });
    }
    const catagory = await userModule.findOne({ name: name });
    if (catagory) {
      return res.status(400).json({ message: "catagory already exist" });
    } else {
      const catagory = await userModule.create({ name, description });
      res.status(201).json({ message: "catagory created successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

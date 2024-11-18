/**
 * here is the code of all the validation of the catagory
 */

const userModule = require("../model/catagory.model");

const validateCatagory = async (req, res, next) => {
  try {
    const { name, description, price } = req.body;
    if (!name) {
      return res.status(400).json({ message: "name is required" });
    }
    if (!description) {
      return res.status(400).json({ message: "description is required" });
    }
    if (!price) {
      return res.status(400).json({ message: "price is required" });
    }
    const catagory = await userModule.findOne({ name: name });
    if (catagory) {
      return res.status(400).json({ message: "catagory already exist" });
    }
    const createNewCatagory = await userModule.create({
      name,
      description,
      price,
    });
    res.status(201).json({ message: "catagory created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  validateCatagory: validateCatagory,
};

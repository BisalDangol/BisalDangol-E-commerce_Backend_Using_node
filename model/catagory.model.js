/**
 * This is the module of catagory of the product in this system
 */

const mongoose = require("mongoose");

/**
 * product schema
 *
 */

const catogory = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      minLength: 10,
      maxLength: 50,
    },
    price: {
      type: Number,
      required: true,
      min: 10,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("catagory", catagorySchema);

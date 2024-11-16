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
      required: true,
      min,
    },
  },
  { timestamps: true, versionKey: false }
);


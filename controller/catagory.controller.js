/**
 * catagory controller
 *
 * format to call be:
 * 1. name
 * 2. discription (optional)
 * 3. price
 *
 * let's define a uri :
 * POST call in URI: localhost:{port}/ecomm/api/v1/auth/catagory
 */

const catagoryModel = require("../model/catagory.model");

exports.createNewCatagory = async (req, res) => {
  // read the req body
  //create catagory the object
  const catagoryData = {
    name: req.body.name,
    discription: req.body.discription, //optional required
    price: req.body.price,
  };
  try {
    //inseart in the mongoDB
    const catagData = await catagoryModel.crate(catagoryData);
    return res.status(201).send({
      message: "catagory created successfully",
    });
  } catch (errr) {
    console.log(errr);
    return res.status(500).send({
      message: "Error: catagory not created",
    });
  }
  //return the res of the created catogory
};

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

exports.createNewCatagory = (req, res) => {
  // read the req body
  const catagoryData = {
    name: req.body.name,
    discription: req.body.discription,
    price: req.body.price,
  };
  //create catagory the object

  //inseart in the mongoDB

  //return the res of the created catogory
};

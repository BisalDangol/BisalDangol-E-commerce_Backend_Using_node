/**
 * POST call in URI: localhost:{port}/ecomm/api/v1/catagory
 */
const CatagoryController = require("../controller/catagory.controller");

module.exports = (app) => {
  app.post("/ecom/api/v1/catagory", CatagoryController.createNewCatagory);
};

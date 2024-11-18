/**
 * POST call in URI: localhost:{port}/ecomm/api/v1/catagory
 */
const CatagoryController = require("../controller/catagory.controller");
const catagotyMiddleware = require("../middleware/catagory.mw");

module.exports = (app) => {
  app.post(
    "/ecom/api/v1/catagory",
    [catagotyMiddleware.validateCatagory],
    CatagoryController.createNewCatagory
  );
};

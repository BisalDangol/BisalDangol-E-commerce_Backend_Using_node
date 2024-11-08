/**
 * The file contain the user route of the project
 *
 * POST call in URI: localhost:8080/E-COMMERCEOFNODE/api/v1/auth/signup
 */
const authController = require("../controller/auth.controller");
const authMiddleWare = require("../middleware/auth.mw");

module.exports = (app) => {
  app.post(
    "/ecomm/api/v1/auth/signup",
    [authMiddleWare.verifyUserSignUpBody],
    authController.signup
  );
};

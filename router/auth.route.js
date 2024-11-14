/**
 * The file contain the user route of the project
 *
 * POST call in URI: localhost:{port}/ecomm/api/v1/auth/signup
 */
const authController = require("../controller/auth.controller");
const authMiddleWare = require("../middleware/auth.mw");

module.exports = (app) => {
  app.post(
    "/ecomm/api/v1/auth/signup",
    [authMiddleWare.verifyUserSignup],
    authController.signup
  );

  /*rout for the post call
   *POST call in URI: localhost:{port}/ecomm/api/v1/auth/signup
   */
  app.post(
    "/ecomm/api/v1/auth/signin",
    [authMiddleWare.verifyUserSignin],
    authController.signin
  );
};

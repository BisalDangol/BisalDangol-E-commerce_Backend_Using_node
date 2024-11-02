/**
 * This is the file that contain code or logic for register user
 */
const bcryptjs = require("bcryptjs");
const userModule = require("../model/user.model");

exports.signup = async (req, res) => {
  /**
   * code to create user
   */
  //1. read the request body
  const requestBody = req.body;

  //2. inseart the data in the users collections  in MongoDb
  const userObj = {
    name: requestBody.name,
    userId: requestBody.userId,
    email: requestBody.email,
    password: bcryptjs.hashSync(requestBody.password, 16),
    userType: requestBody.userType,
  };

  try {
    const userCreate = await userModule.create(userObj);
    res.status(201).send(userCreate);
  } catch (err) {
    console.log("error found: ", err);
    res.status(500).send({
      message: err.message
    });
  }
  //3. return back the responce to the user
};

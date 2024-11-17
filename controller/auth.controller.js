/**
 * This is the file that contain code or logic for register user
 */
const bcryptjs = require("bcryptjs");
const userModule = require("../model/user.model");
const jwt = require("jsonwebtoken");
const secret = require("../config/auth.config");

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
    const obj_ret = {
      name: userCreate.name,
      userId: userCreate.userId,
      email: userCreate.email,
      userType: userCreate.userType,
    };
    res.status(201).send(userCreate);
  } catch (err) {
    console.log("error found: ", err);
    res.status(500).send({
      message: err.message,
    });
  }
  //3. return back the responce to the user
};

exports.signin = async (req, res) => {
  //check the user id is present in the database or not
  const user = await userModule.findOne({ userId: req.body.userId });

  if (user == null) {
    return (res.status(400).send = {
      message: "user not found",
    });
  }
  //check the username and password and verify the password
  const isPasswordVali = bcryptjs.compareSync(req.body.password, user.password);

  if (!isPasswordVali) {
    return res.status(401).send({
      message: "invalid password",
    }); 
  }

  // Check if the token secret is defined
  if (!secret.token) {
    console.error("JWT secret token is missing.");
    return res.status(500).send({ message: "Internal server error" });
  }

  //jwd token will be generate to acess the login
  try {
    const token = jwt.sign({ id: user.userId }, secret.token, {
      expiresIn: 120,
    });
    res.status(200).send({
      name: user.name,
      userId: user.userId,
      email: user.email,
      userType: user.userType,
      ascesstoken: token,
    });
  } catch (err) {
    console.log("error found: ", err);
    res.status(500).send({
      message: err.message,
    });
  }
};

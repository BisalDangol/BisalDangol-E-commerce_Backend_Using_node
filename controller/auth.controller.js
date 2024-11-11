/**
 * This is the file that contain code or logic for register user
 */
const bcryptjs = require("bcryptjs");
const userModule = require("../model/user.model");
const jwt = require("jsonwebtoken");
const jwtEncriptKey = require("../config/auth.config");

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
  await userModule.findOne({ userId: req.body.userId });

  if (user == null) {
    return (res.status(400).senf = d({
      message: "user not found",
    }));
  }
  //check the username and password and verify the password
  const isPasswordVali = bcrypt.compareSync(req.body.password, user.password);

  if (!isPasswordVali) {
    return res.status(401).send({
      message: "invalid password",
    });
  }
  //jwd token will be generate to acess the login
  const token = jwt.sign({ id: user.userId }, jwtEncriptKey.token, {
    expiresIn: 120,
  });
};

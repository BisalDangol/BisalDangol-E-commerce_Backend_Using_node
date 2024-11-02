/*
this is the server of the project and project will run after runing this page
*/

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port_define = require("./config/server.config");
const db_config = require("./config/db.config");
const userModule = require("./model/user.model");
const bcryptjs = require("bcryptjs");
// const http = require("http")
// const { error } = require('console')

/*creating the admin user in the project*/
//connecting to the mongoDB
mongoose.connect(db_config.DB_url);

const db = mongoose.connection;
try {
  db.once("open", () => {
    console.log("MongoDb is connected to the project");
    init();
  });
} catch (error) {
  db.on(error, console.error.bind(console, "connection error:"));
}

/*creating the admin user in the project*/
async function init() {
  try {
    const admin = await userModule.findOne({ userID: "admin" });
    if (admin) {
      console.log("Admin user is already created");
      return;
    }
  } catch (err) {
    console.log(err);
  }
  try {
    adminUser = await userModule.create({
      userId: "admin",
      name: "kabis",
      email: "root.admin@gmail.com",
      password: bcryptjs.hashSync("password", 16),
      userType: "admin",
    });
    console.log("Admin is created now", adminUser);
  } catch (err) {
    console.log("Admin user is not created error: ", err);
  }
}

/* server to begains*/

app.listen(port_define.PORT, () => {
  port_Num = port_define.PORT;
  console.log("server is running on port :", port_Num);
});

/**garbaje code are here
 * new userModule({
        name: "admin",
        email: "admin@gmail.com",
        password: "admin",
        })
 */

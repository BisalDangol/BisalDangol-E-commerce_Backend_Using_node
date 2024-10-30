//loginpage for the project
const mongoose = require("mongoose")


/**
 * user data schema making
 * user ID
 * user name
 * user email
 * userpassword
 * usertype
 */

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        minLength: 10,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    userType:{
        type:String,
        required:true,
        default: "user",
        enum:["admin","user"]
    }


},{timestamps : true, versionKey:flase})

mongoose.model('user',userSchema)
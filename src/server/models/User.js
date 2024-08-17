const mongoose = require("mongoose")

//Creating a schema
const userSchema = mongoose.Schema({
    firstname: { type: String, required: [true, "First name is required"]},
    lastname: { type: String, required: [true, "Last name is required"]},
    email: { type: String, required: [true, "Email is required"], unique: true },
    password: { type: String, required: [true, "Password is required"] },
    admin: { type: Boolean, default: false},
    },
    {timestamp: true}
);


//compiling schema into a model

const User = mongoose.model("User, userSchema");

module.exports = User;

const express = require("express");
const userRoute = express.Router();
const { registerUser } = require("../../controllers/users/users");

userRoute.post('/register', registerUser);

module.exports = userRoute;

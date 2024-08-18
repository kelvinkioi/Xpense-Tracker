const express = require("express");
const userRoute = express.Router();
const { registerUser } = require("../../controllers/users/usersCtrl");

userRoute.post('/register', registerUser);

module.exports = userRoute;

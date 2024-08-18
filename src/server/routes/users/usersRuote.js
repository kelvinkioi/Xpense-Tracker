const express = require("express");
const userRoute = express.Router();
const { registerUser, fetchUsers, loginUser} = require("../../controllers/users/usersCtrl");

userRoute.post('/register', registerUser);
userRoute.post('/login', loginUser);
userRoute.get('/', fetchUsers);


module.exports = userRoute;

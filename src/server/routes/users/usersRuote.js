const express = require("express");
const userRoute = express.Router();
const { registerUser, fetchUsers} = require("../../controllers/users/usersCtrl");

userRoute.post('/api/users/register', registerUser);
userRoute.get('/api/users', fetchUsers);


module.exports = userRoute;

const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const {registerUser} = require("./controllers/users/users");
const userRoute = require("./routes/users/usersRuote");

//Connecting to the database
dbConnect();

//Ruotes
app.use('/', userRoute);


module.exports = app;

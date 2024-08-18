const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const {registerUser} = require("./controllers/users/usersCtrl");
const userRoute = require("./routes/users/usersRuote");

const log = (req, res, next) => {
    console.log("Logged in");
    next();
};

app.use(log);

//Connecting to the database
dbConnect();

//Middlewares
app.use(express.json());

//Ruotes
app.use('/', userRoute);


module.exports = app;

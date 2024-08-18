const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const {registerUser} = require("./controllers/users/usersCtrl");
const userRoute = require("./routes/users/usersRuote");
const errorHandler = require("./middleware/errorsMiddleware");

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

//Error handler
app.use(errorHandler);


module.exports = app;

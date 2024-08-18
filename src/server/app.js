const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const app = express();
const {registerUser} = require("./controllers/users/usersCtrl");
const userRoute = require("./routes/users/usersRuote");
const {errorHandler, notFoundHandler} = require("./middleware/errorsMiddleware");

const log = (req, res, next) => {
    console.log("Logged in");
    next();
};

app.use(log);

//env
dotenv.config();

//Connecting to the database
dbConnect();

//Middlewares
app.use(express.json());

app.get('/', (req, res)=> {
    res.json({msg: 'Welcome to the Xpense Tracker'});
});

//Ruotes
app.use('/api/users', userRoute);

//Error handler
app.use(notFoundHandler);
app.use(errorHandler);


module.exports = app;

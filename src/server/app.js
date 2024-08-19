const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const app = express();
const {registerUser} = require("./controllers/users/usersCtrl");
const userRoute = require("./routes/users/usersRuote");
const {errorHandler, notFoundHandler} = require("./middleware/errorsMiddleware");
const incomeRoute = require("./routes/income/incomeRuote");

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

//Users Ruotes
app.use('/api/users', userRoute);

//Income Ruote
app.use('/api/income', incomeRoute);

//Error handler
app.use(notFoundHandler);
app.use(errorHandler);


module.exports = app;

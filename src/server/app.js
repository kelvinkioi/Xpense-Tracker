const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const app = express();
const {registerUser} = require("./controllers/users/usersCtrl");
const userRoute = require("./routes/users/usersRuote");
const {errorHandler, notFoundHandler} = require("./middleware/errorsMiddleware");
const incomeRoute = require("./routes/income/incomeRuote");
const expenseRoute = require("./routes/expenses/expensesRuote");
const financeRoute = require("./routes/finance/financeRuote");
const authRoute = require("./routes/auth/authRoute");
const resetPasswordRoute = require('./routes/auth/resetPasswordRuote');

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

//Auth Ruotes
app.use('/api/auth', authRoute);

//Reset Password Route
app.use('/api/reset-password', resetPasswordRoute);

//Users Ruotes
app.use('/api/users', userRoute);

//Income Ruotes
app.use('/api/income', incomeRoute);

//Expense Ruotes
app.use('/api/expenses', expenseRoute);

//Finance Ruotes
app.use('/api/finance', financeRoute);



//Error handler
app.use(notFoundHandler);
app.use(errorHandler);


module.exports = app;

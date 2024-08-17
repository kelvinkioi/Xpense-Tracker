const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();


//Connecting to the database
dbConnect();
module.exports = app;

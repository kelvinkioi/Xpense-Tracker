const express = require("express");
const incomeRuote = express.Router();
const {createIncomeCtrl} = require("../../controllers/income/incomeCtrl");

incomeRuote.post('/', createIncomeCtrl);

module.exports = incomeRuote;

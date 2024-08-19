const express = require("express");
const incomeRuote = express.Router();
const {createIncomeCtrl, fetchAllIncomeCtrl} = require("../../controllers/income/incomeCtrl");

incomeRuote.post('/', createIncomeCtrl);
incomeRuote.get('/', fetchAllIncomeCtrl);

module.exports = incomeRuote;

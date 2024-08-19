const express = require("express");
const incomeRuote = express.Router();
const {createIncomeCtrl, fetchAllIncomeCtrl, fetchSingleIncomeCtrl} = require("../../controllers/income/incomeCtrl");

incomeRuote.post('/', createIncomeCtrl);
incomeRuote.get('/', fetchAllIncomeCtrl);
incomeRuote.get('/:id', fetchSingleIncomeCtrl);

module.exports = incomeRuote;

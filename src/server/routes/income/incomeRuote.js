const express = require("express");
const incomeRuote = express.Router();
const {createIncomeCtrl, fetchAllIncomeCtrl, fetchSingleIncomeCtrl, updateIncomeCtrl, deleteIncomeCtrl} = require("../../controllers/income/incomeCtrl");

incomeRuote.post('/', createIncomeCtrl);
incomeRuote.get('/', fetchAllIncomeCtrl);
incomeRuote.get('/:id', fetchSingleIncomeCtrl);
incomeRuote.put('/:id', updateIncomeCtrl);
incomeRuote.delete('/:id', deleteIncomeCtrl);

module.exports = incomeRuote;

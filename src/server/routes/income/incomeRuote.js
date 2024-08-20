const express = require("express");
const incomeRuote = express.Router();
const {createIncomeCtrl, fetchAllIncomeCtrl, fetchSingleIncomeCtrl, updateIncomeCtrl, deleteIncomeCtrl} = require("../../controllers/income/incomeCtrl");
const authMiddleware = require("../../middleware/authMiddleware");

incomeRuote.post('/', authMiddleware, createIncomeCtrl);
incomeRuote.get('/', authMiddleware, fetchAllIncomeCtrl);
incomeRuote.get('/:id', authMiddleware, fetchSingleIncomeCtrl);
incomeRuote.put('/:id', authMiddleware, updateIncomeCtrl);
incomeRuote.delete('/:id', authMiddleware, deleteIncomeCtrl);

module.exports = incomeRuote;

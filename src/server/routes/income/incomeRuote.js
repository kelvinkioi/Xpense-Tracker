const express = require("express");
const incomeRuote = express.Router();
const {createIncomeCtrl, fetchAllIncomeCtrl, fetchSingleIncomeCtrl, fetchAllIncomeUserCtrl, updateIncomeCtrl, deleteIncomeCtrl} = require("../../controllers/income/incomeCtrl");
const {authMiddleware, adminMiddleware} = require("../../middleware/authMiddleware");

incomeRuote.post('/', authMiddleware, createIncomeCtrl);
incomeRuote.get('/all', authMiddleware, adminMiddleware, fetchAllIncomeCtrl);
incomeRuote.get('/', authMiddleware, fetchAllIncomeUserCtrl);
incomeRuote.get('/:id', authMiddleware, fetchSingleIncomeCtrl);
incomeRuote.put('/:id', authMiddleware, updateIncomeCtrl);
incomeRuote.delete('/:id', authMiddleware, deleteIncomeCtrl);

module.exports = incomeRuote;

const express = require("express");
const expenseRuote = express.Router();
const {createExpenseCtrl, fetchAllExpenseCtrl, fetchAllExpenseUserCtrl, fetchSingleExpenseCtrl, updateExpenseCtrl, deleteExpenseCtrl} = require("../../controllers/expenses/expenseCtrl");
const {authMiddleware, adminMiddleware} = require("../../middleware/authMiddleware");

expenseRuote.post('/', authMiddleware, createExpenseCtrl);
expenseRuote.get('/all', authMiddleware, adminMiddleware, fetchAllExpenseCtrl);
expenseRuote.get('/', authMiddleware, fetchAllExpenseUserCtrl);
expenseRuote.get('/:id', authMiddleware, fetchSingleExpenseCtrl);
expenseRuote.put('/:id', authMiddleware, updateExpenseCtrl);
expenseRuote.delete('/:id', authMiddleware, deleteExpenseCtrl);

module.exports = expenseRuote;

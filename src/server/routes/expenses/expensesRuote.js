const express = require("express");
const expenseRuote = express.Router();
const {createExpenseCtrl, fetchAllExpenseCtrl, fetchSingleExpenseCtrl, updateExpenseCtrl, deleteExpenseCtrl} = require("../../controllers/expenses/expenseCtrl");
const authMiddleware = require("../../middleware/authMiddleware");

expenseRuote.post('/', authMiddleware, createExpenseCtrl);
expenseRuote.get('/', authMiddleware, fetchAllExpenseCtrl);
expenseRuote.get('/:id', authMiddleware, fetchSingleExpenseCtrl);
expenseRuote.put('/:id', authMiddleware, updateExpenseCtrl);
expenseRuote.delete('/:id', authMiddleware, deleteExpenseCtrl);

module.exports = expenseRuote;

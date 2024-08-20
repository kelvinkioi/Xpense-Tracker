const express = require("express");
const expenseRuote = express.Router();
const {createExpenseCtrl, fetchAllExpenseCtrl, fetchSingleExpenseCtrl, updateExpenseCtrl, deleteExpenseCtrl} = require("../../controllers/expenses/expenseCtrl");

expenseRuote.post('/', createExpenseCtrl);
expenseRuote.get('/', fetchAllExpenseCtrl);
expenseRuote.get('/:id', fetchSingleExpenseCtrl);
expenseRuote.put('/:id', updateExpenseCtrl);
expenseRuote.delete('/:id', deleteExpenseCtrl);

module.exports = expenseRuote;

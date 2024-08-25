const express = require('express');
const getNetBalanceCtrl = require("../../controllers/finance/financeCtrl");
const { authMiddleware } = require("../../middleware/authMiddleware");

const financeRouter = express.Router();

// Route to get net balance, with authentication middleware
financeRouter.get('/netbalance', authMiddleware, getNetBalanceCtrl);

module.exports = financeRouter;

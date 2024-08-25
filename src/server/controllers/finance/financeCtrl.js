const expressAsyncHandler = require('express-async-handler');
const Income = require('../../models/Income');
const Expense = require('../../models/Expenses');
const mongoose = require('mongoose'); 

// Controller to get net balance
const getNetBalanceCtrl = expressAsyncHandler(async (req, res) => {
    const userId = req.user._id;

    try {
        // Convert userId to ObjectId
        const userObjectId = new mongoose.Types.ObjectId(userId);

        // Fetch total income
        const totalIncome = await Income.aggregate([
            { $match: { user: userObjectId } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);

        // Fetch total expenses
        const totalExpenses = await Expense.aggregate([
            { $match: { user: userObjectId } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);

        const income = totalIncome[0]?.total || 0;
        const expenses = totalExpenses[0]?.total || 0;
        const netBalance = income - expenses;

        // Generate cheeky messages based on net balance
        let message;
        if (netBalance < 0) {
            message = "Oops! It seems like you're spending a bit too much. Time to tighten the belt!😬";
        } else if (netBalance > 0) {
            message = "Nice job! You're in the green. Keep up the good work!💵🥳";
        } else {
            message = "You’re balancing on the edge of the financial tightrope! 🎪 It’s time to make a bold move: either boost those savings or splash out wisely!”";
        }

        res.json({ income, expenses, netBalance, message });
    } catch (error) {
        res.status(500).json({ msg: "Error: " + error.message });
    }
});

module.exports = getNetBalanceCtrl;

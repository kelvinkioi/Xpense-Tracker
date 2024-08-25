const expressAsyncHandler = require('express-async-handler');
const Expense = require('../../models/Expenses');


const createExpenseCtrl = expressAsyncHandler(async (req, res) => {
    const {title, amount, description, user} = req.body;
    try {
        const expense = await Expense.create({title, amount, description, user});
        res.json(expense);
    }
    catch (error) {
        res.json({msg: "Error: " + error.message});
    }
});

//Fetch Expenses
const fetchAllExpenseCtrl = expressAsyncHandler(async (req, res) => {
    const {page} = req.query;
    try {
        const expense = await Expense.paginate({}, {limit:10, page: Number(page),
            populate: "user"
        })
        res.json(expense);
    }
    catch (error) {
        res.json({msg: "Error: " + error.message});
    }
});

// Fetch All Expenses for the Authenticated User
const fetchAllExpenseUserCtrl = expressAsyncHandler(async (req, res) => {
    const {page} = req.query;
    const userId = req.user._id; // Ensure req.user is set by the auth middleware

    try {
        const expense = await Income.paginate({user: userId}, {limit: 10, page: Number(page), populate: 'user'});
        res.json(expense);
    } catch (error) {
        res.status(500).json({msg: "Error: " + error.message});
    }
});

//Fetch a particular Expense
const fetchSingleExpenseCtrl = expressAsyncHandler(async (req, res) => {
    const {id} = req?.params;

    try {
        const expense = await Expense.findById(id);
        res.json(expense);
    }
    catch (error) {
        res.json({msg: "Error: " + error.message});
    }
});

//Update a particular Income
const updateExpenseCtrl = expressAsyncHandler(async (req, res) => {
    const {id} = req?.params;
    const {title, amount, description} = req.body;

    try {
        const expense = await Expense.findByIdAndUpdate(id, {title, amount, description}, {new: true});
        res.json(expense);
    }
    catch (error) {
        res.json({msg: "Error: " + error.message});
    }
});

//Delete a particular Income
const deleteExpenseCtrl = expressAsyncHandler(async (req, res) => {
    const {id} = req?.params;
    const {title, amount, description} = req.body;

    try {
        const expense = await Expense.findByIdAndDelete(id, {title, amount, description}, {new: true});
        res.json(expense);
    }
    catch (error) {
        res.json({msg: "Error: " + error.message});
    }
});

module.exports = {createExpenseCtrl, fetchAllExpenseCtrl, fetchAllExpenseUserCtrl,fetchSingleExpenseCtrl, updateExpenseCtrl, deleteExpenseCtrl};

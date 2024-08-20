const expressAsyncHandler = require('express-async-handler');
const Income = require('../../models/Income');

const createIncomeCtrl = expressAsyncHandler(async (req, res) => {
    const {title, amount, description, user} = req.body;
    try {
        const income = await Income.create({title, amount, description, user});
        res.json(income);
    }
    catch (error) {
        res.json({msg: "Error: " + error.message});
    }
});

//Fetch Incomes'
const fetchAllIncomeCtrl = expressAsyncHandler(async (req, res) => {
    const {page} = req.query;
    try {
        const income = await Income.paginate({}, {limit:10, page: Number(page)})
        res.json(income);
    }
    catch (error) {
        res.json({msg: "Error: " + error.message});
    }
});

//Fetch a particular Incomes
const fetchSingleIncomeCtrl = expressAsyncHandler(async (req, res) => {
    const {id} = req?.params;

    try {
        const income = await Income.findById(id);
        res.json(income);
    }
    catch (error) {
        res.json({msg: "Error: " + error.message});
    }
});

//Update a particular Income
const updateIncomeCtrl = expressAsyncHandler(async (req, res) => {
    const {id} = req?.params;
    const {title, amount, description} = req.body;

    try {
        const income = await Income.findByIdAndUpdate(id, {title, amount, description}, {new: true});
        res.json(income);
    }
    catch (error) {
        res.json({msg: "Error: " + error.message});
    }
});

//Delete a particular Income
const deleteIncomeCtrl = expressAsyncHandler(async (req, res) => {
    const {id} = req?.params;
    const {title, amount, description} = req.body;

    try {
        const income = await Income.findByIdAndDelete(id, {title, amount, description}, {new: true});
        res.json(income);
    }
    catch (error) {
        res.json({msg: "Error: " + error.message});
    }
});

module.exports = {createIncomeCtrl, fetchAllIncomeCtrl, fetchSingleIncomeCtrl, updateIncomeCtrl, deleteIncomeCtrl};

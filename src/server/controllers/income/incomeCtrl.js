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

module.exports = {createIncomeCtrl};

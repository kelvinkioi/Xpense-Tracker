const mongoose = require("mongoose")

//Creating a schema
const expenseSchema = mongoose.Schema({
    title: { type: String, required: [true, "Title name is required"]},
    description: { type: String, required: [true, "Description is required"]},
    type: { type: String, default: "expense"},
    amount: { type: Number, required: [true, "Amount is required"] },
    user: { type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User id is required"] },
    },
    {timestamps: true}
);


//compiling schema into a model
const Expense = mongoose.model("Income", expenseSchema);

module.exports = Expense;

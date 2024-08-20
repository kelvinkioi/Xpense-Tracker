const mongoose = require("mongoose")
const mongoosePaginate = require('mongoose-paginate-v2');

//Creating a schema
const incomeSchema = mongoose.Schema({
    title: { type: String, required: [true, "Title name is required"]},
    description: { type: String, required: [true, "Description is required"]},
    type: { type: String, default: "income"},
    amount: { type: Number, required: [true, "Amount is required"] },
    user: { type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User id is required"] },
    },
    {timestamps: true,
     toObject: { virtuals: true },
     toJSON: { virtuals: true }, }
);

//Pagination
incomeSchema.plugin(mongoosePaginate);

//compiling schema into a model
const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;

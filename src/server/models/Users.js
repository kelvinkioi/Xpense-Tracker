const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");
//Creating a schema
const userSchema = mongoose.Schema({
    firstname: { type: String, required: [true, "First name is required"]},
    lastname: { type: String, required: [true, "Last name is required"]},
    email: { type: String, required: [true, "Email is required"], unique: true },
    password: { type: String, required: [true, "Password is required"] },
    admin: { type: Boolean, default: false},
    },
    {timestamps: true}
);

// #ing password
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

//compiling schema into a model
const User = mongoose.model("User", userSchema);

module.exports = User;

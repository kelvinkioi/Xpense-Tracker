const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");
// Password validation regex
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

//Creating a schema
const userSchema = mongoose.Schema({
    firstname: { type: String, required: [true, "First name is required"]},
    lastname: { type: String, required: [true, "Last name is required"]},
    email: { type: String, required: [true, "Email is required"], unique: true },
    password: { type: String, required: [true, "Password is required"],
     },
    admin: { type: Boolean, default: false},
    // Additional fields for reset password functionality
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    },
    {timestamps: true}
);

// Validate plain text password before saving or updating
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        // Validate the plain text password before hashing
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
        if (!passwordRegex.test(this.password)) {
            return next(new Error("Password must be at least 8 characters long, include both uppercase and lowercase letters, a number, and a special character."));
        }
        // Hash the new password
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});


//Verifying password
userSchema.methods.verifyPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

//compiling schema into a model
const User = mongoose.model("User", userSchema);

module.exports = User;

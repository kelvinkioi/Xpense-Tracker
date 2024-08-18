const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://kelvinkioi:JOAm8bY2SRTW8j6W@xpense-tracker.irr6u.mongodb.net/?retryWrites=true&w=majority&appName=Xpense-Tracker', {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });
        console.log("Hey there!, You have successfully connected to the database")
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
};

module.exports = dbConnect;


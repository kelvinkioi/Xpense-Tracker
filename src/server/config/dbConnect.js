const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect('', {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });
        console.log("Hey there!, You have successfully connected to the database")
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
};

module.exports = dbConnect;


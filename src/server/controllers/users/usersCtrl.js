const { response } = require('../../app');
const User = require('../../models/Users');
const expressAsyncHandler = require('express-async-handler');

//Register User
const registerUser = expressAsyncHandler(async (req, res) => {
    const {email, firstname, lastname, password} = req?.body;
    //Checking if the user is already registered
    const userExists = await User.findOne({email: req.body.email});
        if(userExists) throw new Error('Already registered');
    try{
        //Creating a new user
        const user = await User.create({ email, firstname, lastname, password});
        res.status(200).json(user);

        res.json({msg: "User registered successfully"});
    } catch(error) {
        res.json({msg: "Error: " + error.message});
    }
});


module.exports = {registerUser};

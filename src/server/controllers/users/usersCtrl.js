const { response } = require('../../app');
const User = require('../../models/Users');

//Register User
const registerUser = async (req, res) => {
    const {email, firstname, lastname, password} = req?.body;
    try{
        //Checking if the user is already registered
        const userExists = await User.findOne({email: req.body.email});
        if(userExists) return res.status(400).json({msg: "User already exists"});

        //Creating a new user
        const user = await User.create({ email, firstname, lastname, password});
        response.status(200).json(user);

        res.json({msg: "User registered successfully"});
    } catch(error) {
        res.json({msg: "Error: " + error.message});
    }
};


module.exports = {registerUser};

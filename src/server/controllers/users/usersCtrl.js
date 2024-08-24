const User = require('../../models/Users');
const generateToken = require('../../middleware/tokenGenerator');
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

// Fetching users
const fetchUsers = expressAsyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.json(error);
    }
});

//user login
const loginUser = expressAsyncHandler(async (req, res) => {
    const {email, password} = req?.body;
    const userFound = await User.findOne({email});

    if (userFound && (await userFound?.verifyPassword(password))) {
        res.json({
            _id: userFound?._id,
            firstname: userFound?.firstname,
            lastname: userFound?.lastname,
            email: userFound?.email,
            isAdmin: userFound?.admin,
            token: generateToken(userFound._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    };
});

module.exports = {registerUser, fetchUsers, loginUser};

const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');



// JWT token verification middleware
const authMiddleware = expressAsyncHandler(async (req, res, next) => {
    let token;
  
    if (req?.headers?.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
  
      try {
        if (token) {
          // Verify the token
          const decoded = jwt.verify(token, process.env.JWT_KEY);
  
          // Find the user by ID, excluding the password field
          const user = await User.findById(decoded?.id).select("-password");
  
          // Check if user exists
          if (!user) {
            throw new Error("User not found. Please register or log in again.");
          }
  
          // Attach the user to the request object
          req.user = user;
          next();
        }
      } catch (error) {
        if (error.name === "TokenExpiredError") {
          throw new Error("Session expired. Please log in again.");
        } else if (error.name === "JsonWebTokenError") {
          throw new Error("Invalid token. Please log in again.");
        } else {
          throw new Error("Authentication failed. Please try again.");
        }
      }
    } else {
      throw new Error("Authorization token not found. Please provide a valid token.");
    }
  });
  
  module.exports = authMiddleware;

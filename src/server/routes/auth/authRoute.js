const express = require('express');
const crypto = require('crypto');
const User = require('../../models/Users'); 
const sendResetEmail = require('../../middleware/sendResetEmail'); 

const router = express.Router();

// Forgot Password Route
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate a reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    // Save the user with the reset token
    await user.save();

    // Send email with the reset token
    const resetUrl = `http://localhost:5000/reset-password/${resetToken}`;
    await sendResetEmail(user.email, resetUrl); // Await this async operation

    res.json({ message: 'Password reset link sent to your email.' });
  } catch (error) {
    console.error("Error during password reset:", error); // Log the detailed error
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

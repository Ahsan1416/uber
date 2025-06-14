const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const userController = require('../controllers/user.controller');

// Register Route
router.post('/register', [
  body('email').isEmail().withMessage('Invalid email'),
  body('fullname.firstname').isLength({ min: 3 }).withMessage('First name should be at least 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long'),
], userController.registerUser);

// Login Route (✅ FIXED)
router.post('/login', [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long'),
], userController.loginUser);

// Export
module.exports = router;

const express=require('express');
const router=express.Router();
const {body}=require("express-validator");
const userController=require('../controllers/user.controller')

router.post('/register',[
    body('email').isEmail().withMessage('invalid email'),
    body ('fullname.firstname').isLength({min:3}).withMessage
    ('first name should be at least 3 character long'),
     body ('password').isLength({min:6}).withMessage
    ('password should be at least 6 character long'),

],
userController.registerUser
)




module.exports=router
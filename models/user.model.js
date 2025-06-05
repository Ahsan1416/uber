const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const jsonwebtoken=require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  fullname: {
  firstname: {
    type: String,
    required: true,
    minlength: [3, 'First name must be at least 3 characters long'],
  },
  lastname: {
    type: String,
    minlength: [3, 'Last name must be at least 3 characters long'],
  }
}
,
  email:{
    type:String,
    required:true,
    unique:true,
    minlength: [5, 'Email must be at least 5 characters long'],

  },
  password:{
    type:String,
    required:true,
    select:false,//taky har bar password show na ho
    
  },
  socketID:{
    type:String,
  }
});
userSchema.methods.generateAuthToken=function(){
const token = jsonwebtoken.sign({ _id: this._id }, process.env.JWT_SECRET); // ✅ Correct
//this._id: refers to the current user's ID from MongoDB.process.env.JWT_SECRET: your secret key stored in .env file for security.
return token;
}
userSchema.methods.comparePassword= async function(password){
return await bcrypt.compare(password,this.password)
}
userSchema.statics.hashPassword=async function(password){//This static method is used to hash a plain-text password before saving it to the database.
    return await bcrypt.hash(password,10);
}
const userModel=mongoose.model('user',userSchema);
module.exports=userModel;

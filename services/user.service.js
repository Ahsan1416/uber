const userModel=require('../models/user.model')
module.exports.createUser=async({
    firstname,lastname,email,password
})=>{
    if(!firstname || !password || !email){
        throw new Error ("all fields are required0");
    }
    const user=userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}
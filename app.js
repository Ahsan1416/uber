const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const app=express()
const userRoutes=require('./routes/user.routes')
const connectToDb = require('./db');
const cors=require('cors');
connectToDb()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send("hello world")
});
app.use('/users' ,userRoutes)
module.exports=app;
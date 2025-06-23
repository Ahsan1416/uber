const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const app=express()
const userRoutes=require('./routes/user.routes')
const captainRoutes=require('./routes/captain.routes');
const connectToDb = require('./db');
const cors=require('cors');
const cookieParser=require('cookie-parser');
connectToDb()
app.use(cookieParser());

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send("hello world")
});
app.use('/users' ,userRoutes)
app.use('/captains' ,captainRoutes);
module.exports=app;
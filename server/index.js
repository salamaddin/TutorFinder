const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser =require("cookie-parser");


dotenv.config({path: './.env'});

//const DB = 'mongodb+srv://salamaddin:salam%40100@cluster0.1i6g0.mongodb.net/mernstack?retryWrites=true&w=majority';
//const DB = process.env.DATABASE;
const port = process.env.PORT;

//connection
require('./db/conn');

app.use(cookieParser());
app.use(express.json());

//we link the router file 
app.use(require('./router/auth'));
//userScema model
const User = require('./db/userSchema');
//middleware
// const middleware = (req, res, next) => {
//     console.log('Hello  Middleware');
//     next();
// }
//router
// app.get('/', (req,res)=>{
//     res.send('hello world');
// });

// app.get('/about', (req,res)=>{
//     res.send('this is about page');
// });

app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})

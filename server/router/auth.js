const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require("../db/userSchema");
const authenticate = require('../middleWares/authenticate');
// const cookieParser =require("cookie-parser");
// router.use(cookieParser());

require('../db/conn');

router.get('/', (req,res)=>{
    res.send('hello world form router');
});

// its reuren promis

// router.post('/register',(req,res)=>{

//     const {name, email, phone, work, password, cpassword} = req.body; 
//    if(!name || !email || !phone || !work || !password || !cpassword){
//        return res.status(422).json({error: "plz fill the field properly"});
//    }

// User.findOne({email:email})
//     .then((userExist) =>{
//         if(userExist){
//             return res.status(422).json({error: "Email already exist"});
//         }
//         const user = new User({ 
//             name: name,
//             email: email,
//             phone: phone,
//             work: work,
//             password: password,
//             cpassword: cpassword
//             });

//         user.save().then(() => {
//             res.status(200).json({message: "user registered successful"});
//         }).catch((err) => res.status(500).json({ error: 'falied to register'}));

//     }).catch((err) => {console.log(err); }); 

// });

router.post('/register', async(req,res)=>{

    const {name, email,  password, cpassword} = req.body; 

     if(!name || !email || !password || !cpassword){
         return res.status(422).json({error: "plz fill the field properly"});

    }
    if(password !== cpassword){
        return res.status(422).json({error: "password is not matching"});   
    }
    
try{
    const userExist = await User.findOne({email:email});

    if(userExist){
        return res.status(422).json({error: "Email already exist"});
    }

    const user = new User({ name, email, password, cpassword});

    await user.save();
    res.status(200).json({message: "user registered successful"});
        
}catch(err){
    res.status(500).json({ error: 'falied to register'});
    console.log(err);
}

});



//login route
router.post('/signin', async (req,res) => {

   try{
        const {email, password} = req.body; 
        
        if( !email || !password ){
            return res.status(400).json({error: "plz fill the data properly"});
        };

        const userLogin = await User.findOne({email:email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);
            
            const token = await userLogin.generateAuthToken()
            res.cookie("jwttoken", token, {
                expires: new Date(Date.now() + 300000),
                httpOnly: true
            });

            if(!isMatch){
                 res.status(400).json({error: 'Invalid Credientials'});
            }else{
                res.json({message: 'user signin successful'});
            };
        
        }else{
             res.status(400).json({error: 'Invalid Credientials'});
        };
        
   }catch(err){
       console.log(err);
    };

});

//about page
router.get('/about',authenticate, (req,res)=>{
    console.log('hello about');
    res.send(req.rootUser);
});
//contact page
router.get('/contact',authenticate, (req,res)=>{
    console.log('hello about');
    res.send(req.rootUser);
});
//logout
router.get('/logout', (req,res)=>{
    console.log('hello logout');
    res.clearCookie('jwttoken', {path:'/'});
    res.status(200).send('user logout');
});

module.exports = router;

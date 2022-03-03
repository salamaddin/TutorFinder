const jwt = require('jsonwebtoken');
const User = require("../db/userSchema");

const authenticate = async (req,res,next) => {
    
    try{
       // console.log(req.cookies.jwt);
        const token = req.cookies.jwttoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token});
        if(!rootUser) {
            throw new Error('User not Found')
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        
        next();
    }catch(err){
        res.status(401).send('Unauthorized: no token provided');
       console.log(err);
        // next("Authentication failure!");
    };
};

module.exports = authenticate;
const { hashSync, compareSync } = require('bcrypt');
const express = require("express");
const passport = require("passport");
const app = express();
const RegisterUser = require("../models/user.model");
const jwt = require("jsonwebtoken");
const userExist = async (req, res) => {
  // app.use(passport.initialize());
  // require('../config/passport')
  try{
  const user_name = req.body.username;
  console.log("username in server",user_name)
   const password = hashSync(req.body.password,8);
   console.log("password in server",password)
  let userexist=await RegisterUser.findOne({user_name});
 console.log("userexist is",userexist)
    if (!userexist) {
      return res.status(401).send('User Not Found');
    }
  if (!compareSync(req.body.password, userexist.password)) {
    return res.status(401).send('Invalid credentials');
  }
  let payload={
    user:{
      id:userexist.id
    }
  }
  jwt.sign(payload,'jwt-Secret',{expiresIn:3600000},
  (err,token)=>{
    if(err) throw err;
return res.json({token})
  })
}catch(err){
  console.log(err);
  return res.status(500).send("Invalid token")
}
  
}  


module.exports = userExist;

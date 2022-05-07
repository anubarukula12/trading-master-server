const { hashSync, compareSync } = require("bcrypt");
const express = require("express");
const app = express();
const RegisterUser = require("../models/user.model");
const jwt = require("jsonwebtoken");
const config=require('config');
const userExist = async (req, res) => {
  try {
    const user_name = req.body.username;
   // console.log(config.get('hashing.salt'));
    const password = hashSync(req.body.password, config.get('hashing.salt'));
    let userexist = await RegisterUser.findOne({ user_name });
   // console.log("userexist is", userexist);
    if (!userexist) {
      return res.status(401).send("User Not Found");
    }
    if (!compareSync(req.body.password, userexist.password)) {
      return res.status(401).send("Invalid credentials");
    }
let payload={
  user:{
    id:userexist.id,
    role:userexist.role
  }
}
    jwt.sign(payload, "jwt-Secret", { expiresIn: 3600000 }, (err, token) => {

      if (err) throw err;
      return res.status(200).json({ token,  user:{
        id:userexist.id,
        role:userexist.role
      }
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid token");
  }
};

module.exports = userExist;

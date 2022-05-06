const express = require("express");
const auth = require("../middleware/auth");
const userProfileController=require("../controllers/userProfile.controller")
const userprofilerouter = express.Router();
userprofilerouter.route('/userprofile').get(auth,userProfileController)
module.exports=userprofilerouter;

  
  
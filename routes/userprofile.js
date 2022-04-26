const express = require("express");
const middleware = require("../middleware/middleware");
const userProfileController=require("../controllers/userProfile.controller")
const userprofilerouter = express.Router();
userprofilerouter.route('/userprofile').get(middleware,userProfileController)
console.log("in protected routes");
module.exports=userprofilerouter;

  
  
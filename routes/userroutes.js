const express = require("express");
const auth = require("../middleware/auth");
const userroutes = express.Router();
const user = require("../controllers/user.controller");
const userupdatepassword=require("../controllers/updatepassword.controller")
userroutes.route("/").get(user.getuser);
module.exports =userroutes;
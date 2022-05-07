const express = require("express");
const auth = require("../middleware/auth");
const userroutes = express.Router();
const user = require("../controllers/user.controller");
userroutes.route("/").get(user.getuser);
module.exports =userroutes;
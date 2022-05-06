const express = require("express");
const auth = require("../middleware/auth");
const userroutes = express.Router();
const user = require("../controllers/user.controller");
userroutes.route("/user").get(user.getuser);
userroutes.route("/:id").get(user.getsingleuser);
userroutes.route("/:id").delete(user.deleteuser)
userroutes.route("/update/:id").post(user.updateuser)
module.exports =userroutes;
const express = require("express");
const auth = require("../middleware/auth");
const userupdatepassword=require("../controllers/updatepassword.controller")
const userchgpwdrouter = express.Router();
userchgpwdrouter.route("/changepassword").post(auth,userupdatepassword.updatePassword);
module.exports=userchgpwdrouter;

const express = require("express");
const databasefileupload = require("../controllers/fileupload.controller");
const fileuploadrouter = express.Router();
fileuploadrouter.route("/display").post(databasefileupload);
module.exports = fileuploadrouter;

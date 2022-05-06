const express = require("express");
const auth = require("../middleware/auth");
const recordroutes = express.Router();
const recordCountry = require("../controllers/recordcountry.controller");
recordroutes.route("/add").post(recordCountry.addcountry);
recordroutes.route("/").get(recordCountry.getcountry);
recordroutes.route("/:id").get(recordCountry.getsinglecountry);
recordroutes.route("/:id").delete(recordCountry.deletecountry);
recordroutes.route("/update/:id").post(recordCountry.updatecountry);
module.exports = recordroutes;

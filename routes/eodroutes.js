const express = require("express");
const eodstockroutes = express.Router();
const eodstockdata= require("../controllers/eodstock.controller");
eodstockroutes.route("/add").post(eodstockdata.addstock);
eodstockroutes.route("/").get(eodstockdata.getstock);
eodstockroutes.route("/:id").get(eodstockdata.getsinglestock);
eodstockroutes.route("/:id").delete(eodstockdata.deletestock)
eodstockroutes.route("/update/:id").post(eodstockdata.updatestock)
module.exports=eodstockroutes;
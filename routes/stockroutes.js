const express = require("express");
const auth = require("../middleware/auth");
const stockroutes = express.Router();
const stock = require("../controllers/stock.controller");
stockroutes.route("/add").post(stock.addstock);
stockroutes.route("/").get(stock.getstock);
stockroutes.route("/:id").get(stock.getsinglestock);
stockroutes.route("/:id").delete(stock.deletestock)
stockroutes.route("/update/:id").post(stock.updatestock)
module.exports =stockroutes;
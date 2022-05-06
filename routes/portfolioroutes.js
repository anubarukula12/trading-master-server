const express = require("express");
const auth = require("../middleware/auth");
const portfolioroutes = express.Router();
const portfolio = require("../controllers/portfolio.controller");
portfolioroutes.route("/add").post(portfolio.addportfolio);
portfolioroutes.route("/").get(portfolio.getstockinportfolio);
portfolioroutes.route("/:id").get(portfolio.getuserportfolio);
portfolioroutes.route("/delete/:id").delete(portfolio.deleteportfolio)
portfolioroutes.route("/edit/:id").get(portfolio.getsingleportfolio);
portfolioroutes.route("/update/:id").post(portfolio.updateportfolio)
module.exports =portfolioroutes;
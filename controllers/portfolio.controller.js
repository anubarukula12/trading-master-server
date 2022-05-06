const Userportfolio = require("../models/user_portfolio.model");
const Stock = require("../models/stock.model");
const addportfolio = async (req, res) => {
  const user_id = req.body.user_id;
  const code = req.body.code;
  const purchase_quantity = req.body.purchase_quantity;
  const purchase_price = req.body.purchase_price;
  const purchase_date = req.body.purchase_date;
  const sale_quantity = req.body.sale_quantity;
  const sale_price = req.body.sale_price;
  const sale_date = req.body.sale_date;
  try {
    const newPortfolio = new Userportfolio({
      user_id,
      code,
      purchase_quantity,
      purchase_price,
      purchase_date,
      sale_quantity,
      sale_price,
      sale_date,
    });
    console.log("the portfolios is", newPortfolio);
    await newPortfolio.save();
    return res.status(200).send("Portfolio added successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const getportfolio = async (req, res) => {
  try {
    const portfolio = await Stock.find({});
    return res.json(portfolio);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const getstockinportfolio = async (req, res) => {
    try {
      const stock = await Stock.find({});
      return res.json(stock);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error!");
    }
  };
  const getsingleportfolio = async (req, res) => {
    try {
      const portfolio = await portfolio.find({});
      return res.json(portfolio);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error!");
    }
  };
const getuserportfolio = async (req, res) => {
    console.log("the value is",req.params.id)
  try {
    const portfolio = await Userportfolio.find({user_id:req.params.id});
    console.log(portfolio);
    return res.json(portfolio);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const deleteportfolio = async (req, res) => {
  try {
    const portfolio = await Userportfolio.findByIdAndDelete(req.params.id);
    return res.send(portfolio);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const updateportfolio = async (req, res) => {
  try {
    const portfolio = await Userportfolio.findById(req.params.id);
    portfolio.user_id = req.body.user_id;
    portfolio.code = req.body.code;
    portfolio.purchase_quantity = req.body.purchase_quantity;
    portfolio.purchase_price = req.body.purchase_price;
    portfolio.purchase_date = req.body.purchase_date;
    portfolio.sale_quantity = req.sale_quantity;
    portfolio.sale_price = req.body.sale_price;
    portfolio.sale_date = req.body.sale_date;
    portfolio.save();
    return res.send(portfolio);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
module.exports = {
  addportfolio,
  getstockinportfolio,
  deleteportfolio,
  updateportfolio,
  getuserportfolio,
  getsingleportfolio
};

const EodStock = require("../models/eod_stock_data.model");
const addstock = async (req, res) => {
  const eod_date = req.body.eod_date;
  const stock_id = req.body.stock_id;
  const open = req.body.open;
  const high = req.body.high;
  const low = req.body.low;
  const last = req.body.last;
  const technical_rating = req.body.technical_rating;
  const oscillators_rating = req.body.oscillators_rating;
  const moving_averages_rating = req.body.moving_averages_rating;
  try {
    const neweodStock = new EodStock({
      eod_date,
      stock_id,
      open,
      high,
      low,
      last,
      technical_rating,
      oscillators_rating,
      moving_averages_rating,
    });
    await neweodStock.save();
    return res.status(200).send(" Stock added successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const getstock = async (req, res) => {
  try {
    const stock = await EodStock.find({});
    return res.json(stock);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const getsinglestock = async (req, res) => {
  try {
    const stock = await EodStock.findById(req.params.id);
    return res.json(stock);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const deletestock = async (req, res) => {
  try {
    const stock = await EodStock.findByIdAndDelete(req.params.id);
    return res.send(stock);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const updatestock = async (req, res) => {
  try {
    const stock = await EodStock.findById(req.params.id);
    stock.eod_date = req.body.eod_date;
    stock.stock_id = req.body.stock_id;
    stock.open = req.body.open;
    stock.high = req.body.high;
    stock.low = req.body.low;
    stock.last = req.body.last;
    stock.technical_rating = req.body.technical_rating;
    stock.oscillators_rating = req.body.oscillators_rating;
    stock.moving_averages_rating = req.body.moving_averages_rating;
    stock.save();
    return res.send(stock);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
module.exports = {
  addstock,
  getstock,
  deletestock,
  updatestock,
  getsinglestock,
};

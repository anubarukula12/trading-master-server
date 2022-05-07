const Stock = require("../models/stock.model");
const addstock = async (req, res) => {
  const name = req.body.name;
  const code = req.body.code;
  const description = req.body.description;
  const sector = req.body.sector;
  const exchange_id = req.body.exchange_id;
  try {
    const newStock = new Stock({
      name,
      code,
      description,
      sector,
      exchange_id,
    });
    console.log("the stock is",newStock)
    await newStock.save();
    return res.status(200).send(" Stock added successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const getstock = async (req, res) => {
  try {
    const stock = await Stock.find({});
    return res.json(stock);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const getsinglestock = async (req, res) => {
    try {
      const stock = await Stock.findById(req.params.id);
      return res.json(stock);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error!");
    }
  };
  const getstockbycode = async (req, res) => {
    try {
      const stock = await Stock.find({code:req.params.code});
      return res.json(stock);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error!");
    }
  };
const deletestock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndDelete(req.params.id);
    return res.send(stock);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const updatestock = async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id);
    stock.name = req.body.name;
    stock.code = req.body.code;
    stock.description = req.body.description;
    stock.sector = req.body.sector;
    stock.exchange_id = req.body.exchange_id;
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
  getstockbycode
};

const mongoose = require("mongoose");
const userportfolio = new mongoose.Schema(
  {
    user_id: {
      type:String,
    },
    code:{
      type:String,
    },
    purchase_quantity: {
      type: Number,
    },
    purchase_price: {
      type: Number,
    },
    purchase_date: {
      type: Date,
    },
    sale_quantity: {
      type: Number,
    },
   sale_price: {
      type: Number,
    },
    sale_date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Userportfolio", userportfolio);

const mongoose = require("mongoose");
const stock = new mongoose.Schema(
  {
    stockid: {
      ref: "RegisterUser",
    },
    name: {
      type: String,
    },
    code: {
      type: String,
    },
    description:{
      type:String,
    },
    sector:{
      type:String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stock", stock);

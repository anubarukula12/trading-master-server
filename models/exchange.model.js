const mongoose = require("mongoose");
const exchange = new mongoose.Schema(
  {
    exchangeid: {
      ref: "Country",
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

module.exports = mongoose.model("Exchange", exchange);

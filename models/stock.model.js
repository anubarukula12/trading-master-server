const mongoose = require("mongoose");
const stock = new mongoose.Schema(
  {
    stockid: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"RegisterUser"
    },
    name: {
      type: String,
    },
    code: {
      type: String,
    },
    description: {
      type: String,
    },
    sector:{
      type:String,
    },
    exchange_id:{
      type:String,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stock", stock);

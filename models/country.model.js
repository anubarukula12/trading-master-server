const mongoose = require("mongoose");
const country = new mongoose.Schema(
  {
    country_id: {
      type:Number,
    },
    name: {
      type: String,
    },
    code: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Country", country);

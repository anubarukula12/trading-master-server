const mongoose = require("mongoose");
const eodstockdata = new mongoose.Schema(
  {
  
    eod_date: {
      type: Date,
    },
    stock_id:{
      type:String,
  },
   open: {
      type: Number,
    },
    high:{
      type:Number,
    },
    low:{
      type:Number,
    },
    last:{
      type:Number,
    },
    technical_rating: {
      type: String,
    },
    oscillators_rating:{
        type:String,
    },
   moving_averages_rating:{
       type:String,
   },
},
  {
    timestamps: true,
  }
  );


module.exports = mongoose.model("Eodstockdata", eodstockdata);;
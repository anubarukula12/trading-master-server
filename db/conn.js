const mongoose = require('mongoose')
const config = require('config')

// get mongodb uri
const uri = config.get('database.uri')
const options = { useNewUrlParser: true, useUnifiedTopology: true }
module.exports = mongoose
  // @ts-ignore
  .connect(uri, options)
  .catch(error => console.log(error))


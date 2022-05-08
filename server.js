const express = require("express");
const cors = require("cors");
const config = require("config");
require("dotenv").config();
const mongoose = require("mongoose");
const db = require("./db/conn");
const app = express();

//Middle ware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

//user routes
const usersRouter = require("./routes/user");
app.use("/users", usersRouter);
const loginRouter = require("./routes/login");
app.use("/users", loginRouter);
const userProfileRouter = require("./routes/userprofile");
app.use("/", userProfileRouter);
const portfolioroutes = require("./routes/portfolioroutes");
app.use("/portfolio", portfolioroutes);
const changepwdroute=require("./routes/changepwdroutes");
app.use("/user",changepwdroute);

//Admin routes
const countryroutes = require("./routes/countryroutes");
app.use("/record", countryroutes);
const stockroutes = require("./routes/stockroutes");
app.use("/stock", stockroutes);
const eodroutes = require("./routes/eodroutes");
app.use("/eod_stock_data", eodroutes);
const userroutes = require("./routes/userroutes");
console.log("userroutes");
app.use("/user", userroutes);

//server and mongo connection
const PORT = process.env.PORT || 5000;
mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  console.log("MongoDB is connected");
});

const express = require("express");
const cors = require("cors");

const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
require("dotenv").config();

const uri = process.env.ATLAS_URI;

const app = express();
const port = process.env.port || 5000;

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

//routes
const usersRouter = require("./routes/user");
app.use("/users", usersRouter);
const loginRouter = require("./routes/login");
app.use("/users", loginRouter);
const userprofileRouter=require("./routes/userdetails");
app.use("/",userprofileRouter);
const fileuploadRouter=require("./routes/fileupload")
app.use("/",fileuploadRouter);
const userProfileRouter = require("./routes/userprofile");
app.use("/",userProfileRouter);
//MongoDB connection
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port:${port} `);
});

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config=require("config");
const registerUser = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type: String,
    },
    user_name: {
      type: String,
    },
    email: {
    },
    password: {
      type: String,
    },
    status: {
      type: String,
    },
    role:{
      type:String,
      default:"subscriber"
    }
  },
  {
    timestamps: true,
  }
);

registerUser.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password,config.get("hashing.salt") );
  }
  next();
});

module.exports = mongoose.model("RegisterUser", registerUser);

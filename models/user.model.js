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
      required: true,
      trim: true,
      minlength: 3,
    },
    user_name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
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

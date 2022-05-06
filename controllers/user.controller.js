const registerUser = require("../models/user.model");
  
const getuser = async (req, res) => {
  try {
    const user = await registerUser.find({});
    console.log("user in server",user)
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const getsingleuser = async (req, res) => {
    try {
      const user = await registerUser.findById(req.params.id);
      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error!");
    }
  };
const deleteuser = async (req, res) => {
  try {
    const user = await registerUser.findByIdAndDelete(req.params.id);
    return res.send(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const updateuser = async (req, res) => {
  try {
    const user = await registerUser.findById(req.params.id);
    user.name = req.body.name;
    user.email= req.body.email;
    user.role = req.body.role;
    user.save();
    return res.send(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
module.exports = {
  getuser,
  deleteuser,
  updateuser,
  getsingleuser
};

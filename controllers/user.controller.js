const registerUser = require("../models/user.model");
const getuser = async (req, res) => {
  try {
    const user = await registerUser.find({});

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  getuser,
};

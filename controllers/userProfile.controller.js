
const RegisterUser = require("../models/user.model");
const userProfileController = async (req, res) => {
  try {
    let userexist = await RegisterUser.findById(req.user.id);
    if (!userexist) {
      return res.status(400).send("User Not Found");
    }
    res.json(userexist);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
};
module.exports = userProfileController;

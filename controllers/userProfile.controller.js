
const RegisterUser = require("../models/user.model");
const userProfileController = async (req, res) => {
  console.log("hi i am in protected controller");
  try {
    let userexist = await RegisterUser.findById(req.user.id);
    console.log("hi in userprofile")
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

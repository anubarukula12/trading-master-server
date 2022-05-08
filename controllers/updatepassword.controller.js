const { hashSync, compareSync } = require("bcrypt");
const RegisterUser = require("../models/user.model");
const config = require("config");

const updatePassword = async (req, res) => {
  try {
    const user = await RegisterUser.findById(req.user.id);
    const password = hashSync(req.body.oldpassword, config.get("hashing.salt"));
    if (!compareSync(req.body.oldpassword, user.password)) {
      return res.send("OldPassword is incorrect");
    }
    if (req.body.newpassword !== req.body.confirmpassword) {
      return res
        .status(401)
        .send("NewPassword and Confirmpassword does't match");
    }
    const newpassword = req.body.newpassword;
//     RegisterUser.findOneAndUpdate(req.user.id, newpassword, {
//       new: true,
//     });
//     return res.status(200).send(" Password changed successfully!");
RegisterUser.findByIdAndUpdate(req.user.id,{"password": newpassword})
        res.send("password changed successfully")
   

} catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
module.exports = {
  updatePassword,
};

const RegisterUser = require("../models/user.model");
const userCreate = async (req, res) => {
  console.log("hai in controller");
  const name = req.body.name;
  const user_name = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  console.log(password);
  const confirmpassword = req.body.confirmpassword;
  console.log(confirmpassword);
  const status = "Active";
  try {
    console.log("in try");
    const emailexist = await RegisterUser.findOne({ email });
    console.log("existing email" + emailexist);
    const usernameexist = await RegisterUser.findOne({ user_name });
    console.log("usernameexist" + usernameexist);
    if (emailexist !== null || usernameexist !== null) {
      return res.status(400).send("User Already Exist!");
    }
    if (password != confirmpassword) {
      return res.status(400).send("Password does't match!");
    }
    if(user_name!="admin"){
    const newUser = new RegisterUser({
      name,
      user_name,
      email,
      password,
      status,
      role:"user",
    });
    await newUser.save();
    return res.status(200).send(" user registered successfully!");
  }else{
    const newUser = new RegisterUser({
      name,
      user_name,
      email,
      password,
      status,
      role:"admin",
    });
    await newUser.save();
    return res.status(200).send(" user registered successfully!");
  }}
  catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = userCreate;

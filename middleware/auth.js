const jwt = require("jsonwebtoken");
const config = require("config");
module.exports = function (req, res, next) {
  try {
    let token = req.headers["x-token"];
    console.log("the token in middeleware", token);
    if (!token) {
      return res.status(400).send("Token Not Found");
    } else {
      let decoded = jwt.verify(token,"jwt-Secret");
      console.log("the decode is", decoded);
      req.user = decoded.user;
      next();
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};

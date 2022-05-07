const Countryrecord = require("../models/country.model");
const addcountry = async (req, res) => {
  const name = req.body.name;
  const code = req.body.code;
  const status = req.body.active;
  console.log(name, code, status);
  try {
    const newCountry = new Countryrecord({
      name,
      code,
      status,
    });
    await newCountry.save();
    return res.status(200).send(" Country added successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const getcountry = async (req, res) => {
  try {
    const country = await Countryrecord.find({});
    return res.json(country);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const getsinglecountry = async (req, res) => {
  try {
    const country = await Countryrecord.findById(req.params.id);
    return res.json(country);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const deletecountry = async (req, res) => {
  try {
  const country= await Countryrecord.findByIdAndDelete(req.params.id);
    return res.send(country);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};
const updatecountry=async(req,res)=>{
    try{
      const country=await Countryrecord.findById(req.params.id)
      country.name=req.body.name;
      country.code=req.body.code;
      country.status=req.body.status;
      country.save();
      return res.send(country);
    }catch(err){
        console.log(err);
    return res.status(500).send("Internal Server Error!");
    }
}
module.exports = {
  addcountry,
  getcountry,
  deletecountry,
  updatecountry,
  getsinglecountry
};

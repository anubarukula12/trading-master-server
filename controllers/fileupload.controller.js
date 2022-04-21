const { db } = require("../models/country.model");

const databasefileupload = async (req, res) => {
  countrydata = req.body.excelvalues;
  console.log("the databasevalues", countrydata);
  console.log(Object.entries(countrydata));
  console.log(countrydata.length);
  const headers = countrydata[0];
 
    
    const data = countrydata.slice(1, countrydata.length);
 
    const jsoncountrydata = [],
    countrydataarr= data,
    tablehead = headers
    for (let i=0; i<countrydataarr.length; i++) {
             let details= countrydataarr[i],
                    obj = {};
            for (let j=0; j<tablehead.length; j++)
                    obj[tablehead[j]] = details[j];
            jsoncountrydata.push(obj);
    }
 console.log("countrydata",jsoncountrydata);

 
  
//    for (let i = 1; i < countrydata.length; i++) {
//        console.log("the values are",(Object.assign({},countrydata[i])));

 db.collection('country').insertMany(jsoncountrydata);
  
//    }
};
module.exports = databasefileupload;

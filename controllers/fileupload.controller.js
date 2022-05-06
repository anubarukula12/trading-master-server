const { db } = require("../models/stock.model");

const databasefileupload = async (req, res) => {
  excelsheetdata = req.body.excelvalues;
  console.log("the databasevalues", excelsheetdata);
  console.log(Object.entries(excelsheetdata));
  console.log(excelsheetdata.length);
  const headers = excelsheetdata[0];
 
    
    const data = excelsheetdata.slice(1, excelsheetdata.length);
 
    const jsonexcelsheetdata = [],
    excelsheetdataarr= data,
    tablehead = headers
    for (let i=0; i<excelsheetdataarr.length; i++) {
             let details= excelsheetdataarr[i],
                    obj = {};
            for (let j=0; j<tablehead.length; j++)
                    obj[tablehead[j]] = details[j];
            jsonexcelsheetdata.push(obj);
    }
 console.log("excelsheetdata",jsonexcelsheetdata);

 
  
//    for (let i = 1; i < countrydata.length; i++) {
//        console.log("the values are",(Object.assign({},countrydata[i])));

db.collection().insertMany(jsonexcelsheetdata);
  
//    }
};
module.exports = databasefileupload;

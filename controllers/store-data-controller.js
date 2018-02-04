var express     = require('express');
var app         = express();
var config        = require('./../config');


/* Save Store informtation data */

module.exports.saveStoreData=function(req,res){
    
  if(req && req.body){
    console.log(req.body);
    res.json({
            status:false,
            message:'An error has occured'
            });
    //MongoDb configuration
    // var MongoClient = require('mongodb').MongoClient;
    // var url         = "mongodb://localhost:27017/NotinQStores";

    // MongoClient.connect(url, function(err, db) {
    //   if (err) throw err;
    //   var dbo   = db.db("NotinQStores");
    //   var query = { storeId: 17994 };
    //   dbo.collection("NotinQStores").find(query).toArray(function(err, result) {
    //     if (err){
    //       res.json({
    //         status:false,
    //         message:'An error has occured'
    //         });
    //     }else{
    //       console.log(result);
    //       db.close();
    //       res.json({
    //         status:true,
    //         message:'Data has saved successfully',
    //       });
    //     }
    //   });
    // });

  }
}

/* End of autoComplete module */
const mongos=require("mongoose");
const Schema=mongos.Schema;
const essay=new Schema({
    
   title:String,
   description:String,
   author: String,
   Date: Date,
   shorttext: String,
image:String

});
module.exports=mongos.model('essay',essay);
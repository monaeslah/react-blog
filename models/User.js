const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserSchema = new Schema({
    first_name:{
        type: String
    },
    Last_name:{
        type:String
    },
//     Username:{
// type:String
//     },
    password:{
        type:String,
        required: true
    },
//     PHone_Number:{
//         type:Number
//     },
email: {
    type: String,
    required: true

   
},
    // date: {
    //     type:Date,
    //     default:Date.now
    // }
})
module.exports = User = mongoose.model('users', UserSchema)
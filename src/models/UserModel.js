//model --> connected database -->collection bind....
//require mongoose..
const mongoose = require("mongoose")
const Schema = mongoose.Schema
//create an object of Schema class

const userSchema = new Schema({
    name: { type: String },
    age: { type: Number },
    gender: {
        type: String
    },
    hobbies: [{
        type:String
    }],
    bloodGroup: {
        type:String,
        enum:["A+","A-","B+","B-","AB+","AB-","O+","O-"]
    }

})
//connect userSchema with users collection in connected database

//model("collectionName",schemaObject)
module.exports = mongoose.model("users", userSchema)
//if users collection is not available it will create it self..
//to use userSchema in other files we need to export..
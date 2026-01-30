const mongoose = require("mongoose")
const Schema=mongoose.Schema

const menuSchema=new Schema({
    name:{type:String},
    price:{type:Number},
    category:{type:String},
    isAvailable:{
        type:Boolean,
        default:"true"
    }
})

module.exports=mongoose.model("cafeMenu",menuSchema)
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const CarSchema = new Schema({
  // Core Vehicle Info
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  mileage: { type: Number, required: true },
  vin: { type: String, unique: true },
  
  // Pricing and Sales
  price: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  // Listing Content
  description: { type: String, required: true },
  photos: [{ type: String }], // Array of strings for image URLs
  
  // Condition/Inspection
  conditionReport: {
    engineStatus: String,
    hasAccidents: { type: Boolean, default: false }
  }
})

module.exports = mongoose.model("carScout", CarSchema)
const mongoose = require("mongoose");

const BicycleSchema = new mongoose.Schema({
  category: String,
  price: Number,
  condition: String,
  location: String,
  image: String,
  description: String,
  dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Bicycle", BicycleSchema);

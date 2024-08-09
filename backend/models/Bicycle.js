const mongoose = require("mongoose");

const bicycleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    gender: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    condition: { type: String, required: true },
    images: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bicycle", bicycleSchema);

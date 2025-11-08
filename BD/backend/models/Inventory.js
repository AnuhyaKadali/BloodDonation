const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema(
  {
    bloodGroup: String,
    units: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);

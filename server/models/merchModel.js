const mongoose = require("mongoose");

const merchSchema = mongoose.Schema({
  id: { type: String },
  sku: { type: String },
});

const Merch = mongoose.model("Merch", merchSchema);

module.exports = Merch;

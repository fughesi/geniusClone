const mongoose = require("mongoose");

const merchSchema = mongoose.Schema({
  id: { type: String },
  sku: { type: String },
});

merchSchema.post("save", (doc, next) => {
  console.log("new merch item was saved to the database", doc);
  next();
});

const Merch = mongoose.model("Merch", merchSchema);

module.exports = Merch;

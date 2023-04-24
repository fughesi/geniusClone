const mongoose = require("mongoose");

const songSchema = mongoose.Schema({
  id: { type: String },
});

const Songs = mongoose.model("Songs", songSchema);

module.exports = Songs;

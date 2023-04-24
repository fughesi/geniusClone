const mongoose = require("mongoose");

const artistSchema = mongoose.Schema({
  id: { type: String },
});

const Artists = mongoose.model("Artists", artistSchema);

module.exports = Artists;

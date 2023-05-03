const mongoose = require("mongoose");

const songSchema = mongoose.Schema({
  id: { type: String },
  title: { type: String, trim: true, required: "title is required!" },
  artists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Artists" }],
  likes: { type: Number, default: 0 },
  lyrics: { type: String },
  about: { type: String },
  releaseDate: { type: String },
  producedBy: [{ type: String }],
  writtenBy: [{ type: String }],
  arranger: [{ type: String }],
  composer: [{ type: String }],
  lyricist: [{ type: String }],
  covers: [{ type: String }],
  genres: [{ type: String }],
});

songSchema.post("save", (doc, next) => {
  console.log("new song was saved to the database", doc);
  next();
});

const Songs = mongoose.model("Songs", songSchema);

module.exports = Songs;

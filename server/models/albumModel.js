const mongoose = require("mongoose");

const albumSchema = mongoose.Schema(
  {
    id: { type: String },
    title: { type: String },
    artist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Artists" }],
    released: { type: String },
    lyrics: { type: Boolean },
    viewCount: { type: Number },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
    genres: [{ type: String }],
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Songs" }],
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
  },
  { timestamps: true }
);

albumSchema.post("save", (doc, next) => {
  console.log("new album was saved to the database", doc);
  next();
});

const Albums = mongoose.model("Albums", albumSchema);

module.exports = Albums;

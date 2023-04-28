const mongoose = require("mongoose");

const artistSchema = mongoose.Schema(
  {
    id: { type: String },
    title: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    stageName: { type: String },
    artistIQ: { type: Number, default: 0 },
    age: { type: Number, min: 1, max: 110 },
    isReviewed: { type: Boolean },
    bio: { type: String },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
    genres: [{ type: String }],
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Songs" }],
    albums: [{ type: String }],
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
  },
  { timestamps: true }
);

const Artists = mongoose.model("Artists", artistSchema);

module.exports = Artists;

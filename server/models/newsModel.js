const mongoose = require("mongoose");

const newsSchema = mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: "title is required!" },
    snippet: { type: String },
    article: { type: String, required: "article text cannot be blank!" },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Author",
    },
    date: { type: String, required: true },
    photo: { type: String },
    photoAlt: { type: String },
    categories: [],
    referencedArtists: { type: Array },
    referencedSongs: { type: Array },
    isPublished: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const News = mongoose.model("News", newsSchema);

module.exports = News;

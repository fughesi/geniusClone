const mongoose = require("mongoose");

const forumSchema = mongoose.Schema(
  {
    id: { type: String },
    author: { type: mongoose.SchemaTypes.ObjectId, ref: "Users" },
    topic: [{ type: String }],
    createdAt: { type: Date, immutable: true, default: () => new Date() },
  },
  { timestamps: true }
);

const Forum = mongoose.model("Forum", forumSchema);

module.exports = Forum;

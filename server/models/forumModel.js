const mongoose = require("mongoose");

const forumSchema = mongoose.Schema({
  id: { type: String },
});

const Forum = mongoose.model("Forum", forumSchema);

module.exports = Forum;

const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  id: { type: String },
  username: { type: String, required: "username is required!" },
  firstName: { type: String },
  lastName: { type: String },
  isActive: { type: Boolean, default: true },
  age: { type: Number, min: 1, max: 110 },
  iqPoints: { type: Number, default: 0 },
  email: { type: String, lowercase: true, required: "email is required!" },
  password: { type: String },
  articles: [{ type: String }],
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;

const mongoose = require("mongoose");

const practiceSchema = mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

practiceSchema.post("save", (doc, next) => {
  console.log("new name and image was saved to the database");
  next();
});

const Pratice = mongoose.model("Practice", practiceSchema);

module.exports = Pratice;

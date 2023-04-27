const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const dbConnect = mongoose
  .set("strictQuery", false)
  .connect("mongodb://localhost:27017/GeniusClone", {
    // .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connection successful"))
  .catch((error) => `db connection failed with error message: ${error}`);

module.exports = dbConnect;

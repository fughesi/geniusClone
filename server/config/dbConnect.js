const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const dbConnect = mongoose
  .set("strictQuery", false)
  .connect(process.env.MONGODB)
  .then(() => console.log("db connection successful"))
  .catch((error) => `db connection failed with error message: ${error}`);

module.exports = dbConnect;

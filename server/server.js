const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const serverRoutes = require("./routes/serverRoutes");
const errorHandler = require("./middleware/errorHandler");

dbConnect;
const app = express();
const port = process.env.PORT || 5252;

// CONFIG
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("static"));

// ROUTES LIST
app.use("/api/users", userRoutes);
app.use("/", serverRoutes);
app.get("*", (req, res) => {
  res.send("404");
});

app.use(errorHandler);

app.listen(port, () => console.log(`server running on  http://localhost:${port}`));

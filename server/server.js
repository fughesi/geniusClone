const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT || 5252;

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("static"));

// ROUTES LIST
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("what up");
});

app.listen(port, () => console.log(`server running on  http://localhost:${port}`));

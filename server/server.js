const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/dbConnect");

const songRoutes = require("./routes/songRoutes");
const albumRoutes = require("./routes/albumRoutes");
const userRoutes = require("./routes/userRoutes");
const artistRoutes = require("./routes/artistRoutes");
const newsRoutes = require("./routes/newsRoutes");
const serverRoutes = require("./routes/serverRoutes");
const errorHandler = require("./middleware/errorHandler");

dbConnect;
const app = express();
const port = process.env.PORT || 5252;

// CONFIG
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "http://127.0.0.1:5174"],
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(cookieParser());
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("static"));
app.use(express.urlencoded({ extended: false }));

// ROUTES LIST
app.use("/api/users", userRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/artists", artistRoutes);
app.use("/", serverRoutes);
app.get("*", (req, res) => {
  res.send("404");
});

app.use(errorHandler);
app.listen(port, () => console.log(`server running on  http://localhost:${port}`));
console.log("===========================");

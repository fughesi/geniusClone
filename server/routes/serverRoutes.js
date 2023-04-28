const express = require("express");
const { homepage, registerUser, registerPage } = require("../controllers/serverControllers");

const router = express.Router();

// SERVER ROUTES
router.route("/").get(homepage);
router.route("/register").get(registerPage).post(registerUser);

module.exports = router;

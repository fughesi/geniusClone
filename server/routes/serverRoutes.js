const express = require("express");
const { homepage, registerUser, registerPage, loginPage } = require("../controllers/serverControllers");
const { UserValidation } = require("../validation/validateData");
const validation = require("../middleware/validateData");

const router = express.Router();

// SERVER ROUTES
router.route("/").get(homepage);
router.route("/register").get(registerPage).post(registerUser);
router.route("/login").get(loginPage).post(validation(UserValidation), loginPage);

module.exports = router;

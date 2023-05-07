const express = require("express");
const { homepage, registerUser, registerPage, loginPage } = require("../controllers/serverControllers");
const { UserValidation } = require("../validation/validateData");
const validation = require("../middleware/validation");
const { uploadPhoto } = require("../middleware/photoUploader");

const router = express.Router();

// SERVER ROUTES
router.route("/").get(homepage);
router.route("/register").get(registerPage).post(uploadPhoto.single("image"), registerUser);
router.route("/login").get(loginPage).post(validation(UserValidation), loginPage);

module.exports = router;

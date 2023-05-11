const express = require("express");
const {
  homepage,
  registerUser,
  registerPage,
  loginPage,
  mockRegisterPage,
  postMockRegistration,
} = require("../controllers/serverControllers");
const { UserValidation } = require("../validation/validateData");
const validation = require("../middleware/validation");
const { uploadPhoto } = require("../middleware/photoUploader");

const router = express.Router();

// SERVER ROUTES
router.route("/").get(homepage);
router.route("/register").get(registerPage).post(uploadPhoto.single("image"), registerUser);
router.route("/login").get(loginPage).post(validation(UserValidation), loginPage);
router.route("/mockRegister").get(mockRegisterPage).post(uploadPhoto.single("image"), postMockRegistration);

module.exports = router;

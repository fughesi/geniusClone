const express = require("express");
const Practice = require("../models/_practiceModel");
const fs = require("fs");

const {
  homepage,
  registerUser,
  registerPage,
  loginPage,
  mockRegisterPage,
  postMockRegistration,
  getAllpracticeDB,
} = require("../controllers/serverControllers");
const { UserValidation } = require("../validation/validateData");
const { uploadPhoto } = require("../middleware/photoUploader");
const validation = require("../middleware/validation");

const router = express.Router();

// SERVER ROUTES
router.route("/").get(homepage);
router.route("/register").get(registerPage).post(uploadPhoto.single("image"), registerUser);
router.route("/login").get(loginPage).post(validation(UserValidation), loginPage);
router.route("/mockRegister").get(mockRegisterPage).post(uploadPhoto.single("image"), postMockRegistration);
router.route("/getPracticeReg").get(getAllpracticeDB);

module.exports = router;

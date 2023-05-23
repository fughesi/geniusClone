const { UserValidation, NewsValidation } = require("../validation/validateData");
const { uploadPhoto } = require("../middleware/photoUploader");
const validation = require("../middleware/validation");
const { createNewsArticle } = require("../controllers/newsController");
const express = require("express");
const {
  homepage,
  newsPage,
  registerUser,
  registerPage,
  loginPage,
  mockRegisterPage,
  postMockRegistration,
  getAllpracticeDB,
} = require("../controllers/serverControllers");

const router = express.Router();

// SERVER ROUTES
router.route("/").get(homepage);
router.route("/register").get(registerPage).post(uploadPhoto.single("image"), registerUser);
router.route("/login").get(loginPage).post(validation(UserValidation), loginPage);
router.route("/news").get(newsPage).post(uploadPhoto.single("image"), createNewsArticle);
router.route("/mockRegister").get(mockRegisterPage).post(uploadPhoto.single("image"), postMockRegistration);
router.route("/getPracticeReg").get(getAllpracticeDB);

module.exports = router;

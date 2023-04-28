const express = require("express");
const router = express.Router();
const { getAllNewsArticles, createNewsArticle } = require("../controllers/newsController");
const { NewsValidation } = require("../validation/verifyData");
const validation = require("../middleware/validateData");

// NEWS ROUTES
router.route("/").get(getAllNewsArticles).post(validation(NewsValidation), createNewsArticle);

module.exports = router;

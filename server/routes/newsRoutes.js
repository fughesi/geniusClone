const express = require("express");
const router = express.Router();
const { getAllNewsArticles, createNewsArticle, updateNewsArticle } = require("../controllers/newsController");
const { NewsValidation } = require("../validation/validateData");
const validation = require("../middleware/validation");

// NEWS ROUTES
router.route("/").get(getAllNewsArticles);
router.route("/:id").post(validation(NewsValidation), createNewsArticle).patch(updateNewsArticle);

module.exports = router;

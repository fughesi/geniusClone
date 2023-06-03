const express = require("express");
const router = express.Router();
const { getAllArtists } = require("../controllers/artistController");
const { ArtistValidation } = require("../validation/validateData");
const validation = require("../middleware/validation");

// ARTIST ROUTES
router.route("/").get(getAllArtists);

module.exports = router;

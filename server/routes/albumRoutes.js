const express = require("express");
const router = express.Router();
const { getAllAlbums, addNewAlbum } = require("../controllers/albumController");
const { AlbumValidation } = require("../validation/validateData");
const validation = require("../middleware/validation");

// ALBUM ROUTES
router.route("/").get(getAllAlbums).post(validation(AlbumValidation), addNewAlbum);

module.exports = router;

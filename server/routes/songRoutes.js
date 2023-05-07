const express = require("express");
const { getAllSongs, getSingleSong, addNewSong } = require("../controllers/songControllers");
const { SongValidation } = require("../validation/validateData");
const validation = require("../middleware/validation");

const router = express.Router();

// SONG ROUTES
router.route("/").get(getAllSongs).post(validation(SongValidation), addNewSong);
router.route("/:id").get(getSingleSong);

module.exports = router;

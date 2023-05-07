const { getAllUsers, createNewUser, getSingleUser } = require("../controllers/userControllers");
const { UserValidation } = require("../validation/validateData");
const { uploadPhoto } = require("../middleware/photoUploader");
const validation = require("../middleware/validation");
const express = require("express");

const router = express.Router();

// USER ROUTES
router.route("/").get(getAllUsers);
router.route("/register").post(validation(UserValidation), createNewUser);
router.route("/:id").get(getSingleUser);

module.exports = router;

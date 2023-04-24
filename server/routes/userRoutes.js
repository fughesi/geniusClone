const { getAllUsers, createNewUser } = require("../controllers/userControllers");
const { UserValidation } = require("../validation/verifyData");
const validation = require("../middleware/validateData");
const express = require("express");

const router = express.Router();

// api/users
router.route("/").get(getAllUsers);
router.route("/register").post(validation(UserValidation), createNewUser);

module.exports = router;

const { v4 } = require("uuid");
const Artists = require("../models/artistsModel");
const asyncHandler = require("express-async-handler");
const capitalizeFirstLetter = require("../utils/capitalize");

//==============================================

//DESC : get all artists
// ROUTE : GET /api/artist
//ACCESS : public
const getAllArtists = asyncHandler(async (req, res) => {
  const result = await Artists.find().populate();

  if (result) {
    console.log("Artists sent");
    res.status(200).json(result);
  } else {
    res.status(500);
    throw new Error("Unable to get artists from DB at this time");
  }
});

module.exports = { getAllArtists };

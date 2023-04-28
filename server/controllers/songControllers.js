const { v4 } = require("uuid");
const Songs = require("../models/songModel");
const asyncHandler = require("express-async-handler");

// =================================

//DESC : get all songs from db
//ROUTE : GET api/songs
//ACCESS : public
const getAllSongs = asyncHandler(async (req, res) => {
  const result = await Songs.find();

  if (result?.length) {
    res.status(200).json(result);
  } else {
    res.status(500);
    throw new Error("Unable to fetch songs from the database at this time");
  }
});

// =================================

//DESC : get single song from db
//ROUTE : GET api/songs/:id
//ACCESS : public
const getSingleSong = asyncHandler(async (req, res) => {
  const result = await Songs.find({ _id: req.params.id });

  if (result?.length) {
    res.status(200).json(result);
  } else {
    res.status(500);
    throw new Error("Unable to fetch song from the database at this time");
  }
});

// =================================

//DESC : add new song to the db
//ROUTE : POST api/songs
//ACCESS : public
const addNewSong = asyncHandler(async (req, res) => {
  const {
    title,
    artists,
    lyrics,
    about,
    releaseDate,
    producedBy,
    writtenBy,
    arranger,
    composer,
    lyricist,
    covers,
    genres,
  } = req.body;

  const song = new Songs({
    id: v4(),
    title,
    artists,
    lyrics,
    about,
    releaseDate,
    producedBy,
    writtenBy,
    arranger,
    composer,
    lyricist,
    covers,
    genres,
  });

  const result = await song.save();

  if (result) {
    res.status(201).json(result);
  } else {
    res.status(400);
    throw new Error("Unable to add new song to the database at this time");
  }
});

module.exports = { getAllSongs, addNewSong, getSingleSong };

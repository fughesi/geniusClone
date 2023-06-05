const { v4 } = require("uuid");
const Albums = require("../models/albumModel");
const asyncHandler = require("express-async-handler");
const capitalizeFirstLetter = require("../utils/capitalize");

//==============================================

//DESC : get all albums
//ROUTE : GET /api/albums
//ACCESS : public
const getAllAlbums = asyncHandler(async (req, res) => {
  const result = await Albums.find().populate();

  if (result) {
    console.log("Albums sent");
    res.status(200).json(result);
  } else {
    res.status(500);
    throw new Error("Unable to get albums from DB at this time");
  }
});

//==============================================

//DESC : add new album
//ROUTE : POST /api/albums
//ACCESS : public
const addNewAlbum = asyncHandler(async (req, res) => {
  const { title, artist, released, lyrics, genres, songs } = req.body;

  const duplicateAlbumCheck = await Albums.findOne({ title: title.toLowerCase() }).exec();

  if (duplicateAlbumCheck) throw new Error("This album already exists in the Database");

  const album = new Albums({
    id: v4(),
    title: capitalizeFirstLetter(title),
    artist,
    // artist: [...artist],
    released,
    lyrics,
    viewCount: 0,
    genres,
    following: [],
    followers: [],
    songs,
    released: released || new Date(),
    createdAt: new Date(),
  });

  const result = await album.save();

  if (result) {
    console.log("New album saved to DB");
    res.status(200).json(result);
  } else {
    res.status(500);
    throw new Error("Unable to save album to DB at this time");
  }
});

module.exports = { getAllAlbums, addNewAlbum };

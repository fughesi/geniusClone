const dbConnect = require("../config/dbConnect");
const seeder = require("../config/dbSeed");
const Artists = require("../models/artistsModel");
const { v4 } = require("uuid");

dbConnect;

const artist = [
  new Artists({
    id: v4(),
    title: "Mr.",
    firstName: "Steven",
    lastName: "Cam",
    stageName: "Big Money Salvia",
    artistIQ: 1110,
    age: 33,
    isReviewed: true,
    bio: "The greatest rock and roll hall of famer of all time!!!",
    followers: ["644a88b5849a447b4d2c56da"],
    following: ["644a88b5849a447b4d2c56db"],
    genres: ["Rock", "Pop"],
    songs: ["644b5e9038c614dfb7233546"],
    albums: ["Blast from the past"],
  }),
];

seeder(artist);

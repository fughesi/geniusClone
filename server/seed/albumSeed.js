const dbConnect = require("../config/dbConnect");
const seeder = require("../config/dbSeed");
const Album = require("../models/albumModel");
const { v4 } = require("uuid");

dbConnect;

const album = [
  new Album({
    id: v4(),
    title: "The greatest hits",
    artist: ["644b60ec550c5e1b10b61b9a"],
    released: "10/31/99",
    lyrics: true,
    genres: ["rap", "R+B"],
    songs: ["644b5e9038c614dfb7233546"],
  }),
  new Album({
    id: v4(),
    title: "Dark Knight",
    artist: ["644b60ec550c5e1b10b61b9a"],
    released: "01/20/16",
    lyrics: true,
    genres: ["rock", "rockabilly"],
    songs: ["644b5e9038c614dfb7233546"],
  }),
  new Album({
    id: v4(),
    title: "The worst day",
    artist: ["644b60ec550c5e1b10b61b9a"],
    released: "09/11/01",
    lyrics: true,
    genres: ["Blues"],
    songs: ["644b5e9038c614dfb7233546"],
  }),
  new Album({
    id: v4(),
    title: "Green popsicle",
    artist: ["644b60ec550c5e1b10b61b9a"],
    released: "11/11/11",
    lyrics: true,
    genres: ["dubstep", "Drum and bass"],
    songs: ["644b5e9038c614dfb7233546"],
  }),
  new Album({
    id: v4(),
    title: "Blue fish",
    artist: ["644b60ec550c5e1b10b61b9a"],
    released: "01/01/21",
    lyrics: true,
    genres: ["hardcore", "nightcore"],
    songs: ["644b6db9c7ce0a780762df8c"],
  }),
];

seeder(album);

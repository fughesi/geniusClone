const dbConnect = require("../config/dbConnect");
const seeder = require("../config/dbSeed");
const Songs = require("../models/songModel");
const { v4 } = require("uuid");

dbConnect;

const songs = [
  new Songs({
    id: v4(),
    title: "My Love",
    artists: ["644a88b5849a447b4d2c56da"],
    lyrics: "Here we are now, entertain us",
    about: "This is a song about the birds and the bees and the mutha fuckin trees",
    releaseDate: new Date(),
    producedBy: ["Kid skip"],
    writtenBy: ["Danny boy", "Bird Brain"],
    arranger: ["Mr. Los"],
    composer: ["Hunny Dew"],
    lyricist: ["Kid Skip"],
    covers: ["Mi Amor"],
    genres: ["Hard Rock", "Pop", "Goth", "Industrial"],
  }),
  new Songs({
    id: v4(),
    title: "In Utero",
    artists: ["644a88b5849a447b4d2c56da"],
    lyrics: "I wish I could eat your cancer when you turn black",
    about: "The best lyrics on the planet my G",
    releaseDate: new Date(),
    producedBy: ["Kid skip"],
    writtenBy: ["bunny hop", "masta P"],
    arranger: ["cunning lingus"],
    composer: ["Hunny Dew"],
    lyricist: ["Kid Skip", "mad flava"],
    covers: ["Uterus", "placebo"],
    genres: ["Hard Rock", "Goth", "Industrial"],
  }),
];

seeder(songs);

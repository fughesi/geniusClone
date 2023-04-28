const dbConnect = require("../config/dbConnect");
const seeder = require("../config/dbSeed");
const Author = require("../models/authorModel");
const { v4 } = require("uuid");

dbConnect;

const author = [
  new Author({
    id: v4(),
    username: "Mama_Mia",
    firstName: "Mia",
    lastName: "Mama",
    age: 22,
    iqPoints: 215,
    email: "ladybug@gmail.com",
    password: "123",
    articles: ["I sell feet pics"],
  }),
];

seeder(author);

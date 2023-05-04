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
    password: "123123",
    articles: ["I sell feet pics"],
  }),
  new Author({
    id: v4(),
    username: "tuchasBreath",
    firstName: "Mike",
    lastName: "schwing",
    age: 29,
    iqPoints: 115,
    email: "theMan@gmail.com",
    password: "123123",
    articles: ["blah blog"],
  }),
  new Author({
    id: v4(),
    username: "Plady",
    firstName: "Missy",
    lastName: "Elliot",
    age: 52,
    iqPoints: 2345,
    email: "datBitch@gmail.com",
    password: "123123",
    articles: ["I sell records"],
  }),
];

seeder(author);

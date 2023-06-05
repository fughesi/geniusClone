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
  new Author({
    id: v4(),
    username: "Mr AK",
    firstName: "nerdy",
    lastName: "birdy",
    age: 41,
    iqPoints: 245,
    email: "AK4Lyfe@pm.com",
    password: "123123",
    articles: ["coding for nerds", "this my jam", "I love lamp"],
  }),
  new Author({
    id: v4(),
    username: "jizzy",
    firstName: "bob",
    lastName: "millie",
    age: 71,
    iqPoints: 12945,
    email: "bob123@hotmail.com",
    password: "123123",
    articles: ["oldest dude", "The 70's were the best"],
  }),
  new Author({
    id: v4(),
    username: "humpty dumpty",
    firstName: "Kyle",
    lastName: "Elize",
    age: 50,
    iqPoints: 5150,
    email: "Kyle1970@gmail.com",
    password: "123123",
    articles: ["I sell records", "colorado"],
  }),
  new Author({
    id: v4(),
    username: "herb",
    firstName: "herby",
    lastName: "handcock",
    age: 58,
    iqPoints: 5621,
    email: "handyherb153@yahoo.com",
    password: "123123",
    articles: ["I have a dream", "the expendables", "Dangerous theory"],
  }),
  new Author({
    id: v4(),
    username: "Maduro",
    firstName: "Alexei",
    lastName: "navalny",
    age: 45,
    iqPoints: 15621,
    email: "chosenOne@gmail.com",
    password: "123123",
    articles: ["Number one", "potential"],
  }),
];

seeder(author);

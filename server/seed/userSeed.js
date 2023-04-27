const dbConnect = require("../config/dbConnect");
const seeder = require("../config/dbSeed");
const Users = require("../models/userModel");
const { v4 } = require("uuid");

dbConnect;

const users = [
  new Users({
    id: v4(),
    username: "bob the bandit",
    firstName: "bob",
    lastName: "mac",
    isActive: true,
    age: 33,
    email: "things@gmail.com",
    phone: "17074539977",
    password: "123456",
    homeAddress: {
      number: "323",
      street: "elm st",
      city: "Tampa",
      state: "FL",
      zipCode: "33606",
    },
    shippingAddress: {
      number: "323",
      street: "elm st",
      city: "Tampa",
      state: "FL",
      zipCode: "33606",
    },
    billingAddress: {
      number: "323",
      street: "elm st",
      city: "Tampa",
      state: "FL",
      zipCode: "33606",
    },
    shoppingCart: [],
    savedForLater: [],
  }),
  new Users({
    id: v4(),
    username: "billy123",
    firstName: "bill",
    lastName: "barbs",
    isActive: true,
    age: 73,
    email: "builder@gmail.com",
    phone: "3849596672",
    password: "123456",
    homeAddress: {
      number: "512",
      street: "sycamoore st",
      city: "Tampa",
      state: "FL",
      zipCode: "33661",
    },
    shippingAddress: {
      number: "512",
      street: "sycamoore st",
      city: "Tampa",
      state: "FL",
      zipCode: "33661",
    },
    billingAddress: {
      number: "512",
      street: "sycamoore st",
      city: "Tampa",
      state: "FL",
      zipCode: "33661",
    },
    shoppingCart: [],
    savedForLater: [],
  }),
];

seeder(users);

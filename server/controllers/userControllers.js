const { v4 } = require("uuid");
const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

const capitalizeFirstLetter = require("../utils/capitalize");

// ====================================

//DESC : get all the users in the db
//ROUTE : GET /api/users
//ACCESS : public
const getAllUsers = asyncHandler(async (req, res) => {
  const result = await Users.find({});

  if (result) {
    res.status(200).json(result);
  } else {
    console.log("Unable to fetch all users at this time");
    res.status(500);
    throw new Error("Unable to fetch all users at this time");
  }
});

// ====================================

//DESC : create a new user in the db
//ROUTE : POST /api/users/register
//ACCESS : public
const createNewUser = asyncHandler(async (req, res) => {
  const { username, firstName, lastName, age, phone, email, password, shippingAddress, billingAddress, homeAddress } =
    req.body;

  const usernameUnavailable = await Users.findOne({ username }).exec();
  const emailUnavailable = await Users.findOne({ email }).exec();

  if (emailUnavailable) {
    res.status(400);
    throw new Error(`Email ${email} already in use.  Please try with a different email or log in`);
  }

  if (usernameUnavailable) {
    res.status(400);
    throw new Error(`${username} unavailable, please pick another username`);
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: v4(),
    username,
    firstName: capitalizeFirstLetter(firstName),
    lastName: capitalizeFirstLetter(lastName),
    isActive: true,
    age,
    email: email?.toLowerCase(),
    phone,
    password: encryptedPassword,
    homeAddress: {
      number: homeAddress?.number,
      street: homeAddress?.street,
      city: capitalizeFirstLetter(homeAddress?.city),
      state: homeAddress?.state.toUpperCase(),
      zipCode: homeAddress?.zipCode,
    },
    shippingAddress: {
      number: shippingAddress?.number,
      city: shippingAddress?.city,
      state: shippingAddress?.state.toUpperCase(),
      zipCode: shippingAddress?.zipCode,
    },
    billingAddress: {
      number: billingAddress?.number,
      city: billingAddress?.city,
      state: billingAddress?.state.toUpperCase(),
      zipCode: billingAddress?.zipCode,
    },
    shoppingCart: [],
    savedForLater: [],
    createdAt: () => Date.now(),
  };

  res.send(newUser);
  //   const result = await Users.create(newUser);

  //   if (result) {
  //     res.status(200).json(result);
  //   } else {
  //     (err) => console.log(err);
  //     throw new Error("this is the shit");
  //   }
});

module.exports = { getAllUsers, createNewUser };
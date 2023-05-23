const { v4 } = require("uuid");
const bcrypt = require("bcrypt");
const express = require("express");
const roles = require("../utils/roles");
const Users = require("../models/userModel");
const { createToken, maxAge } = require("../utils/token");
const asyncHandler = require("express-async-handler");
const capitalizeFirstLetter = require("../utils/capitalize");
const fs = require("fs");

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

//DESC : get a single user from the db
//ROUTE : GET /api/users/:id
//ACCESS : public
const getSingleUser = asyncHandler(async (req, res) => {
  const result = await Users.find({ _id: req.params.id });

  if (result) {
    res.status(200).json(result);
  } else {
    console.log("Unable to fetch user at this time");
    res.status(500);
    throw new Error("Unable to fetch user at this time");
  }
});

// ====================================

//DESC : create a new user in the db
//ROUTE : POST /api/users/register
//ACCESS : public
const createNewUser = asyncHandler(async (req, res) => {
  const { username, firstName, lastName, age, phone, email, password, shippingAddress, billingAddress, homeAddress } =
    req.body;

  console.log(req.files);

  const emailUnavailable = await Users.findOne({ email: email.toLowerCase() }).exec();
  const usernameUnavailable = await Users.findOne({ username }).exec();

  if (emailUnavailable) {
    res.status(400);
    throw new Error(`Email ${email} already in use.  Please try with a different email or log in`);
  }

  if (usernameUnavailable) {
    res.status(400);
    throw new Error(`${username} unavailable, please pick another username`);
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  const newUser = new Users({
    id: v4(),
    image: {
      data: fs.readFileSync("static/images/profileAvatars/" + req.file.filename),
      contentType: "image/png",
    },
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
      city: capitalizeFirstLetter(shippingAddress?.city),
      state: shippingAddress?.state.toUpperCase(),
      zipCode: shippingAddress?.zipCode,
    },
    billingAddress: {
      number: billingAddress?.number,
      city: capitalizeFirstLetter(billingAddress?.city),
      state: billingAddress?.state.toUpperCase(),
      zipCode: billingAddress?.zipCode,
    },
    shoppingCart: [],
    savedForLater: [],
  });

  const result = await newUser.save();

  const token = createToken({
    id: newUser.id,
    username: newUser.username,
  });

  if (result) {
    res
      .status(201)
      .cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 })
      .cookie("newUser", true, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 })
      .json({ message: `Welcome aboard, ${result.username || "new user"}` });
  } else {
    res.status(400);
    throw new Error("Unable to create new user profile at this time");
  }
});

module.exports = { getAllUsers, createNewUser, getSingleUser };

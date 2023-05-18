const fs = require("fs");
const express = require("express");
const asyncHandler = require("express-async-handler");
const Practice = require("../models/_practiceModel");

// =============================

const homepage = (req, res) => {
  res.render("content", { title: "homepage" });
};

// =============================

const registerPage = (req, res) => {
  res.render("content", { title: "registerPage" });
};

// =============================

const registerUser = (req, res) => {
  for (const [key, value] of req.body.entries()) {
    console.log(key, value);
  }

  res.render("content", { title: "registerPage" });
};

// =============================

const loginPage = (req, res) => {
  res.render("content", { title: "loginPage" });
};

// =============================

const mockRegisterPage = (req, res) => {
  res.render("content", { title: "mockRegisterPage" });
};

// =============================

//DESC : add a new practice doc in the db
//ROUTE : POST /mockRegister
//ACCESS : public
const postMockRegistration = asyncHandler(async (req, res) => {
  const { name, height, weight, eyeColor } = req.body;

  console.log(req.body);

  const newPostReg = new Practice({
    name,
    weight,
    height,
    eyeColor,
    image: {
      data: fs.readFileSync("static/images/profileAvatars/" + req.file.filename),
      contentType: "image/png",
    },
  });

  const result = await newPostReg.save();

  if (result) {
    res.status(201).json({ message: `practice post mockregistration succeeded` });
  } else {
    res.status(400);
    throw new Error("practice post mockRegistration failed");
  }
});

// =============================

//DESC : get all the practice docs in the db
//ROUTE : GET /getPracticeReg
//ACCESS : public
const getAllpracticeDB = asyncHandler(async (req, res) => {
  const result = await Practice.find();

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500);
    throw new Error("no practice results found in DB");
  }
});

module.exports = {
  homepage,
  registerUser,
  registerPage,
  loginPage,
  mockRegisterPage,
  postMockRegistration,
  getAllpracticeDB,
};

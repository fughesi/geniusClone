const fs = require("fs");
const express = require("express");
const asyncHandler = require("express-async-handler");
const Practice = require("../models/_practiceModel");

const homepage = (req, res) => {
  res.render("content", { title: "homepage" });
};

const registerPage = (req, res) => {
  res.render("content", { title: "registerPage" });
};

const registerUser = (req, res) => {
  for (const [key, value] of req.body.entries()) {
    console.log(key, value);
  }

  res.render("content", { title: "registerPage" });
};

const loginPage = (req, res) => {
  res.render("content", { title: "loginPage" });
};

const mockRegisterPage = (req, res) => {
  res.render("content", { title: "mockRegisterPage" });
};

const postMockRegistration = (req, res) => {
  const { name, height, weight, eyeColor } = req.body;

  console.log(req.body);

  const result = new Practice({
    name,
    weight,
    height,
    eyeColor,
    image: {
      data: fs.readFileSync("static/images/profileAvatars/" + req.file.filename),
      contentType: "image/png",
    },
  });

  result
    .save()
    .then((res) => {
      console.log("image is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });

  res.send("image is saved");
};

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

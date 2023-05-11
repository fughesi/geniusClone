const fs = require("fs");
const express = require("express");
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
  const saveImage = new Practice({
    name: req.body.name,
    image: {
      data: fs.readFileSync("static/images/profileAvatars/" + req.file.filename),
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
  res.send("image is saved");
};

module.exports = { homepage, registerUser, registerPage, loginPage, mockRegisterPage, postMockRegistration };

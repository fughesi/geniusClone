const mongoose = require("mongoose");
const { v4 } = require("uuid");
const asyncHandler = require("express-async-handler");
const News = require("../models/newsModel");

//==============================================

//DESC : get all news articles
// ROUTE : GET /api/news
//ACCESS : public
const getAllNewsArticles = asyncHandler(async (req, res) => {
  const result = await News.find();

  if (result) {
    console.log("News articles sent");
    res.status(200).json(result);
  } else {
    res.status(500);
    throw new Error("Unable to get news articles at this time");
  }
});

//==============================================

//DESC : post a news article
// ROUTE : POST /api/news
//ACCESS : public
const createNewsArticle = asyncHandler(async (req, res) => {
  res.status(201).send("tits");
});

module.exports = { getAllNewsArticles, createNewsArticle };

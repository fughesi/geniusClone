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
  res.status(200).send(result);
});

//==============================================

//DESC : post a news article
// ROUTE : POST /api/news
//ACCESS : public
const createNewsArticle = asyncHandler(async (req, res) => {
  res.status(201).send("tits");
});

module.exports = { getAllNewsArticles, createNewsArticle };

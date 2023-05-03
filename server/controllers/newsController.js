const { v4 } = require("uuid");
const News = require("../models/newsModel");
const Author = require("../models/authorModel");
const asyncHandler = require("express-async-handler");
const capitalizeFirstLetter = require("../utils/capitalize");
const { array } = require("joi");

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
// ROUTE : POST /api/news/:id
//ACCESS : private
const createNewsArticle = asyncHandler(async (req, res) => {
  const author = await Author.findById({ _id: req.params.id });
  const {
    title,
    snippet,
    article,
    date,
    photo,
    photoAlt,
    categories,
    referencedArtists,
    referencedSongs,
    isPublished,
  } = req.body;

  const news = {
    id: v4(),
    title: capitalizeFirstLetter(title),
    snippet: capitalizeFirstLetter(snippet),
    article,
    author: author?._id || "",
    date: date || new Date(),
    photo,
    photoAlt: photoAlt || "Stock photo",
    categories: [...categories],
    referencedArtists: [...referencedArtists],
    referencedSongs: [...referencedSongs],
    isPublished: Boolean(isPublished),
  };

  const result = await news.save();

  if (result) {
    console.log("News articles sent");
    res.status(200).json(result);
  } else {
    res.status(500);
    throw new Error("Unable to create news articles at this time");
  }
});

//==============================================

//DESC : update a current news article
// ROUTE : PATCH /api/news/:id
//ACCESS : private
const updateNewsArticle = asyncHandler(async (req, res) => {
  // const result = await News.findByIdAndUpdate(req.params.id, req.body);

  //   const newsArticle = await News.updateOne({ _id: req.params.id }, ()=>{

  //     const filteredArrays = Object.entries(req.body)
  //       .filter((i) => {
  //         return Array.isArray(i[1]);
  //       })

  //  if (filteredArrays) {
  //    for (const [key, value] of filteredArrays) {

  //   { <field>: { $elemMatch: { <query1>, <query2>, ... } } }
  //    }

  //   });

  if (result) {
    console.log("News article updated");
    res.status(200).json(result);
  } else {
    res.status(500);
    throw new Error("Unable to create news articles at this time");
  }
});

module.exports = { getAllNewsArticles, createNewsArticle, updateNewsArticle };

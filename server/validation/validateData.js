const Joi = require("joi");

// ============== USER
const UserValidation = Joi.object({
  id: Joi.string(),
  image: Joi.binary(),
  username: Joi.string().min(2).required(),
  firstName: Joi.string().min(2),
  lastName: Joi.string().min(2),
  isActive: Joi.boolean(),
  age: Joi.number().min(1),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10),
  password: Joi.string()
    .ruleset.min(6)
    .max(1024)
    .rule({ message: "password must be at least 6 characters long" })
    .required(),
  confirmPassword: Joi.ref("password"),
  homeAddress: Joi.object({
    number: Joi.string(),
    street: Joi.string(),
    city: Joi.string(),
    state: Joi.string().length(2).rule({ message: "Please use 2 character state abbreviation" }),
    zipCode: Joi.string().ruleset.min(5).max(10).rule({ message: "Zip code must be between 5 and 10 characters" }),
  }),
  shippingAddress: Joi.object({
    number: Joi.string(),
    street: Joi.string(),
    city: Joi.string(),
    state: Joi.string().length(2),
    zipCode: Joi.string().ruleset.min(5).max(10).rule({ message: "Zip code must be between 5 and 10 characters" }),
  }),
  billingAddress: Joi.object({
    number: Joi.string(),
    street: Joi.string(),
    city: Joi.string(),
    state: Joi.string().length(2),
    zipCode: Joi.string().ruleset.min(5).max(10).rule({ message: "Zip code must be between 5 and 10 characters" }),
  }),
  shoppingCart: Joi.array().items(Joi.object({ id: Joi.string(), quantity: Joi.number() })),
  savedForLater: Joi.array().items(Joi.object({ id: Joi.string(), quantity: Joi.number() })),
});

// ============== NEWS
const NewsValidation = Joi.object({
  id: Joi.string(),
  title: Joi.string()
    .ruleset.min(3)
    .max(150)
    .rule({ message: "Title must be between 3 and 150 characters long" })
    .required(),
  snippet: Joi.string().required(),
  article: Joi.string().min(50).required(),
  author: Joi.string().required(),
  date: Joi.string().required(),
  // photo: Joi.string(),
  photo: Joi.binary(),
  photoAlt: Joi.string(),
  categories: Joi.array(),
  referencedArtists: Joi.array(),
  referencedSongs: Joi.array(),
  isPublished: Joi.boolean(),
});

// ============== SONG
const SongValidation = Joi.object({
  id: Joi.string(),
  title: Joi.string().required(),
  artists: Joi.array().items(Joi.string()).required(),
  likes: Joi.number(),
  lyrics: Joi.string(),
  about: Joi.string(),
  releaseDate: Joi.string(),
  producedBy: Joi.array().items(Joi.string()),
  writtenBy: Joi.array().items(Joi.string()),
  arranger: Joi.array().items(Joi.string()),
  composer: Joi.array().items(Joi.string()),
  lyricist: Joi.array().items(Joi.string()),
  covers: Joi.array().items(Joi.string()),
  genres: Joi.array().items(Joi.string()),
});

// ============== ARTISTS
const ArtistValidation = Joi.object({
  id: Joi.string(),
  title: Joi.string(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  stageName: Joi.string().required(),
  artistIQ: Joi.number().required(),
  age: Joi.number().min(1).max(110),
  isReviewed: Joi.boolean(),
  bio: Joi.string(),
  followers: Joi.array().items(Joi.string()),
  following: Joi.array().items(Joi.string()),
  genres: Joi.array().items(Joi.string()),
  songs: Joi.array().items(Joi.string()),
  albums: Joi.array().items(Joi.string()),
});

// ============== AUTHOR
const AuthorValidation = Joi.object({
  id: Joi.string(),
  username: Joi.string().required(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  isActive: Joi.boolean(),
  age: Joi.number(),
  iqPoints: Joi.number().required(),
  email: Joi.string().email(),
  password: Joi.string(),
  confirmPassword: Joi.ref("password"),
  articles: Joi.array().items(Joi.string()),
});

// ============== FORUM
const ForumValidation = Joi.object({
  id: Joi.string(),
  author: Joi.string().required(),
  topic: Joi.array().items(Joi.string()).required(),
});

// ============== MERCH
const MerchValidation = Joi.object({
  id: Joi.string(),
  sku: Joi.string().required(),
});

module.exports = {
  UserValidation,
  NewsValidation,
  ArtistValidation,
  AuthorValidation,
  ForumValidation,
  MerchValidation,
  SongValidation,
};

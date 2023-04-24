const Joi = require("joi");

const UserValidation = Joi.object({
  id: Joi.string(),
  username: Joi.string().min(2).required(),
  firstName: Joi.string().min(2),
  lastName: Joi.string().min(2),
  isActive: Joi.boolean(),
  age: Joi.number().min(1),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10),
  password: Joi.string().ruleset.min(6).max(1024).rule({ message: "password must be at least 6 characters long" }),
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
});

module.exports = { UserValidation };

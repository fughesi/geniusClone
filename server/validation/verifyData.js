const Joi = require("joi");

const Users = require("../models/userModel");

const UserValidation = Joi.object({
  username: Joi.string(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  isActive: Joi.boolean(),
  age: Joi.number(),
  email: Joi.string().min(10000), //erase min
  phone: Joi.string().min(10),
  password: Joi.string().min(6).max(1024),
  confirmPassword: Joi.ref("password"),
  homeAddress: Joi.object({
    number: Joi.string(),
    street: Joi.string(),
    city: Joi.string(),
    state: Joi.string().length(2),
    zipCode: Joi.string(),
  }),
  shippingAddress: Joi.object({
    number: Joi.string(),
    street: Joi.string(),
    city: Joi.string(),
    state: Joi.string().length(2),
    zipCode: Joi.string(),
  }),
  billingAddress: Joi.object({
    number: Joi.string(),
    street: Joi.string(),
    city: Joi.string(),
    state: Joi.string().length(2),
    zipCode: Joi.string(),
  }),
});

module.exports = { UserValidation };

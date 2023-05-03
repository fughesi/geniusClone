const dotenv = require("dotenv").config();
const JWT = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return JWT.sign(id, process.env.JWT, {
    expiresIn: maxAge,
  });
};

module.exports = { createToken, maxAge };

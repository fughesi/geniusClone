const Users = require("../models/userModel");
const asyncHandler = require("express-async-handler");

// ====================================

//DESC : get all the users in the db
//ROUTE : GET /api/users
//ACCESS : public
const getAllUsers = asyncHandler(async (req, res) => {
  //   const result = await Users.find({});

  res.send("yo mama");

  //   if (result) {
  //     res.status(200).json(result);
  //   } else {
  //     (err) => console.log(err);
  //   }
});

// ====================================

//DESC : create a new user in the db
//ROUTE : POST /api/users/register
//ACCESS : public
const createNewUser = asyncHandler(async (req, res) => {
  //   const result = await Users.create(req.body);
  res.send(req.body);

  //   if (result) {
  //     res.status(200).json(result);
  //   } else {
  //     (err) => console.log(err);
  //   }
});

module.exports = { getAllUsers, createNewUser };

const JWT = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const getHeaders = req.headers.authorization || req.headers.Authorization;

  if (!getHeaders?.startwith("Bearer")) {
    res.status(401);
    throw new Error("User not authorized.  Please log in to continue.");
  }

  const token = getHeaders.split(" ")[1];

  JWT.verify(token, process.env.JWT, (error, decoded) => {
    if (error) res.status(403);
    throw new Error("User not authorized");

    // req.user = decoded.UserInfo.username;
    // req.role = decoded.UserInfo.role;
    next();
  });
};

module.exports = { verifyUser };

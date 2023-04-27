const authUser = (role) => {
  return (req, res, next) => {
    if (req.user == null) {
      return res.status(403).json({ message: "You must be logged in to perform that function" });
    }
    next();
  };
};

const authRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(401).json({ message: "not authorized to access this page" });
    }
    next();
  };
};

module.exports = {
  authUser,
  authRole,
};

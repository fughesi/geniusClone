const homepage = (req, res) => {
  res.render("content", { title: "homepage" });
};

const registerPage = (req, res) => {
  res.render("content", { title: "registerPage" });
};

const registerUser = (req, res) => {
  // console.log(req.body);

  for (var [key, value] of req.body.entries()) {
    console.log(key, value);
  }

  res.render("content", { title: "registerPage" });
};

module.exports = { homepage, registerUser, registerPage };

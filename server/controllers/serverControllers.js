const homepage = (req, res) => {
  res.render("content", { title: "homepage" });
};

const registerPage = (req, res) => {
  res.render("content", { title: "registerPage" });
};

const registerUser = (req, res) => {
  for (const [key, value] of req.body.entries()) {
    console.log(key, value);
  }

  res.render("content", { title: "registerPage" });
};

const loginPage = (req, res) => {
  res.render("content", { title: "loginPage" });
};

module.exports = { homepage, registerUser, registerPage, loginPage };

const getAuthSignin = (req, res) => {
  res.send("signin");
};

const getAuthLogin = (req, res) => {
  const { firstName, lastName } = req.body;

  res.send("login" + "" + firstName + "" + lastName);
};

const getAuthLogout = (req, res) => {
  res.send("logout");
};

const getAuthPassword = (req, res) => {
  res.send("password");
};

const getAuthRemember = (req, res) => {
  res.send("remember");
};

module.exports = {
  getAuthLogin,
  getAuthLogout,
  getAuthPassword,
  getAuthRemember,
  getAuthSignin,
};

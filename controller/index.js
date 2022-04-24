const getRootPage = (req, res) => {
  res.send("root");
};

const getHomePage = (req, res) => {
  res.send("home");
};

const getError = (req, res) => {
  res.send("error");
};

const getAccesDeny = (req, res) => {
  res.send("fail");
};

module.exports = {
  getError,
  getHomePage,
  getRootPage,
  getAccesDeny,
};

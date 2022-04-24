const getProfileView = (req, res) => {
  res.send("visit");
};

const getProfileCreate = (req, res) => {
  res.send("create");
};

const getProfileEdit = (req, res) => {
  res.send("edit");
};

const getProfileDelete = (req, res) => {
  res.send("delete");
};

module.exports = {
  getProfileCreate,
  getProfileDelete,
  getProfileEdit,
  getProfileView,
};

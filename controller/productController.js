const getProductView = (req, res) => {
  res.send("visit product");
};

const getProductCreate = (req, res) => {
  res.send("create product");
};

const getProductEdit = (req, res) => {
  res.send("edit product");
};

const getproductDelete = (req, res) => {
  res.send("delete product");
};

module.exports = {
  getProductCreate,
  getProductEdit,
  getProductView,
  getproductDelete,
};

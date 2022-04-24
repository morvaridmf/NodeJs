const express = require("express");
const router = express.Router();
const {
  getProductCreate,
  getProductEdit,
  getProductView,
  getproductDelete,
} = require("../controller/productController");

router.get("/products/visit", getProductView);

router.post("/products/create", getProductCreate);

router.put("/products/edit", getProductEdit);

router.delete("/products/delete", getproductDelete);

module.exports = router;

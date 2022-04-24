const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const productRoutes = require("./productRoutes");
const userRoutes = require("./userRoutes");
const {
  getError,
  getHomePage,
  getRootPage,
  getAccesDeny,
} = require("../controller/index");

router.get("/", getRootPage);

router.get("/home", getHomePage);

router.get("/404page", getError);

router.get("/access-deny", getAccesDeny);

module.exports = {
  userRoutes,
  productRoutes,
  router,
  authRoutes,
};

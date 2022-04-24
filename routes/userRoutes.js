const express = require("express");
const router = express.Router();
const {
  getProfileCreate,
  getProfileDelete,
  getProfileEdit,
  getProfileView,
} = require("../controller/userController");

router.get("/profile", getProfileView);

router.post("/profile/create", getProfileCreate);

router.put("/profile/edit", getProfileEdit);

router.delete("/profile/delete", getProfileDelete);

module.exports = router;

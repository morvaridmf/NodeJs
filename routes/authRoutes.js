const express = require("express");
const router = express.Router();
const {
  getAuthLogin,
  getAuthLogout,
  getAuthPassword,
  getAuthSignin,
  getAuthRemember,
} = require("../controller/authController");
router.post("/signin", getAuthSignin);

router.post("/login", getAuthLogin);

router.get("/logout", getAuthLogout);

router.put("/forgetpassword", getAuthPassword);

router.post("/rememberMe", getAuthRemember);

module.exports = router;

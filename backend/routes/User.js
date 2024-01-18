const express = require("express");
const path = require("path");
const router = express.Router();
const passport = require("passport");

const {
  registerUser,
  userLogin,
  userLoginWithGoogle,
  getCurrentUser,
  userLoginWithGoogleCallback,
} = require("../controller/User");
const { cookieauthorization } = require("../middleware/CookieAuth");

router.get("/logout", cookieauthorization, (req, res) => {
  return res
    .clearCookie("accesstoken")
    .status(200)
    .json({ msg: "Logout successful" });
});
router.get("/current", cookieauthorization, getCurrentUser);
router.post("/login", userLogin);

router.post("/register", registerUser);
router.get("/loginWithGoogle" , userLoginWithGoogle);
router.get("/auth/google/callback", userLoginWithGoogleCallback);

module.exports = router;

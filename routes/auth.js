const express = require("express");
const { Router } = express;
const router = new Router();

const passport = require("../config/passport");

router.post(
  "/login",
  passport.authenticate("local-login", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/login",
    failureRedirect: "/signup",
  })
);

router.get("/", (req, res) => {
  res.sendFile(__dirname + "public/index.html");
});

router.get("/login", (req, res) => {
  res.sendFile(`${__dirname}/public/login.html`);
});

router.get("/signup", (req, res) => {
  res.sendFile(`${__dirname}/public/signup.html`);
});

router.get("/logout", (req, res) => {
  res.redirect("/login");
});

module.exports = router;

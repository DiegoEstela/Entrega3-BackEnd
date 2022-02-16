const authorize = require("../utils/authorize");
const express = require("express");
const { Router } = express;
const router = new Router();

router.get("/", authorize, (req, res) => {
  res.render("public/index", {
    nameUser: req.user.username,
    title: "List of products",
  });
});

module.exports = router;

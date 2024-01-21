const express = require("express");

const router = require("router");
const { loginUser, creatUser, getUser } = require("../controllers/auth");

router.post("/signup", creatUser);

router.post("/login", loginUser);

router.post("/getuser", getUser);

module.exports = router;
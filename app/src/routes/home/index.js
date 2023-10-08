"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// "/" 라우트
router.get("/", ctrl.hello);

// "/login" 라우트
router.get("/login", ctrl.login);


module.exports = router;

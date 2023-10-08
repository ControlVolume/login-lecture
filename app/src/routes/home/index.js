"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// "/" 라우트
router.get("/", ctrl.output.hello);

// "/login" 라우트
router.get("/login", ctrl.output.login);

// post api
router.post("/login", ctrl.process.login);


module.exports = router;

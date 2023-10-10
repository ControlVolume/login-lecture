// 서버에서 구현되는 곳
"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// "/" 라우트
router.get("/", ctrl.output.hello);

// "/login" 라우트
router.get("/login", ctrl.output.login);

// 회원가입 등록
router.get("/register", ctrl.output.register);

// login post api
router.post("/login", ctrl.process.login);

// register post api(요청)
router.post("/register", ctrl.process.register);

module.exports = router;
